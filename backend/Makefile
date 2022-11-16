.PHONY: all run run-sudo

all: run

run: build-docker
	docker run -it --rm\
		-v $(PWD):/home/code/ \
		--user $$(id -u):$$(id -g) \
		-p 8080:8000 \
	  django_app bash

run-sudo: build-docker
	docker run -it --rm\
		-v $(PWD):/home/code/ \
		-p 8080:8000 \
	  django_app

build-docker: Dockerfile
	docker build . -f Dockerfile -t django_app 
	touch $@
	  