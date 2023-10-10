DOCKER_IMAGE:=api-go

build:
	docker build --tag api-go .

run:
	docker run -it --rm --publish 8000:8000 ${DOCKER_IMAGE} 
