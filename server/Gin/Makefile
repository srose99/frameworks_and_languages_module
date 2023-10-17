DOCKER_IMAGE:=api-go

build:
	docker build --tag ${DOCKER_IMAGE} .

run:
	docker run -it --rm --publish 8000:8000 ${DOCKER_IMAGE} 
