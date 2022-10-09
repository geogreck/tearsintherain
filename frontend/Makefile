.PHONY: all run run-sudo

all: run

run: build
	docker run -it \
		-v $(PWD):/home/code/ \
		--user $$(id -u):$$(id -g) \
		-p 8000:8000 \
	  react_app

run-sudo: build
	docker run -it \
		-v $(PWD):/home/code/ \
		-p 8000:8000 \
	  react_app

build: Dockerfile
	docker build . -f Dockerfile -t react_app 
	touch $@