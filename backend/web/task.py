from fastapi import HTTPException, APIRouter

from model.task import Task
from service.task import create_one, get_one, update_one, get_all
from service.db import SessionDep

router = APIRouter(prefix="/task")


@router.post("/", response_model=Task)
def create_task(task: Task, session: SessionDep) -> Task:
    db_task = Task.model_validate(task)
    new_task = create_one(db_task, session)
    return new_task


@router.get("/", response_model=list[Task])
def get_all_tasks(session: SessionDep) -> list[Task]:
    tasks = get_all(session)
    return tasks


@router.get("/{task_id}", response_model=Task)
def get_one_task(task_id: int, session: SessionDep) -> Task:
    task = get_one(task_id, session)
    if not task:
        raise HTTPException(
            status_code=404, detail=f"The task with id {task_id} was not found"
        )
    return task


@router.patch("/{task_id}", response_model=Task)
def update_task(task_id: int, task: Task, session: SessionDep) -> Task:
    updated_task = update_one(task_id, task, session)
    return task
