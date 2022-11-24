FROM python:slim

ENV PYTHONUNBUFFERED=1

WORKDIR /home/code

RUN pip install django
RUN pip install djangorestframework
RUN pip install drf-yasg

RUN apt update
RUN apt install -y libpq-dev
RUN pip install psycopg2-binary
RUN pip install django-cors-headers

COPY . /home/code
