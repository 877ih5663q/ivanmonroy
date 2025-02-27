from fastapi import HTTPException

from model.task import Task
from service.db import SessionDep
from sqlmodel import select


def create_one(task: Task, session: SessionDep) -> Task:
    session.add(task)
    session.commit()
    session.refresh(task)
    return task


def get_all(session: SessionDep) -> list[Task]:
    tasks = session.exec(select(Task)).all()
    return tasks


def get_one(task_id: int, session: SessionDep) -> Task:
    task = session.get(Task, task_id)
    return task


def update_one(task_id: int, task_update: Task, session: SessionDep) -> Task:
    current = session.get(Task, task_id)
    if not current:
        raise HTTPException(
            status_code=404, detail=f"The task with id {task_id} was not found"
        )
    updated = task_update.model_dump(exclude_unset=True)
    current.sqlmodel_update(updated)
    session.add(current)
    session.commit()
    session.refresh(current)
    return current
