from enum import Enum
from typing import Optional

from sqlmodel import SQLModel, Field


class StatusEnum(str, Enum):
    todo = 'To do'
    inprogress = 'In progress'
    done = 'Done'


class PriorityEnum(str, Enum):
    low = 'Low'
    medium = 'Medium'
    high = 'High'


class Task(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True)
    title: str
    description: str
    status: StatusEnum
    priority: PriorityEnum
