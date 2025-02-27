import os
from typing import Annotated

from fastapi import Depends
from sqlmodel import Session, create_engine
from dotenv import load_dotenv
from sqlmodel import SQLModel

load_dotenv()

DATABASE_URL: str | None = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)


def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]
