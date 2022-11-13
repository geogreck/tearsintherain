.PHONY: all run run-sudo

all: run

run: build-docker
	docker run -it --rm\
		-v $(PWD):/home/code/ \
		--user $$(id -u):$$(id -g) \
		-p 8000:8000 \
	  react_app

run-sudo: build-docker
	docker run -it --rm\
		-v $(PWD):/home/code/ \
		-p 8000:8000 \
	  react_app

build-docker: Dockerfile
	docker build . -f Dockerfile -t react_app 
	touch $@

host-static: build
	docker run -it --rm \
		--name nginx_static  \
		-v $(PWD)/build/:/usr/share/nginx/html:ro \
		-p 8000:80 \
	  nginx
	  