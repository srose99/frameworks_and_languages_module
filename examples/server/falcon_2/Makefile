DOCKER_IMAGE:=falcon_test_2

run_local:
	python3 things.py

build:
	docker build --tag ${DOCKER_IMAGE} .
run:
	docker run --rm --publish 8000:8000 ${DOCKER_IMAGE}
shell:
	docker run --rm -it --publish 8000:8000 --volume ${PWD}:/app/ ${DOCKER_IMAGE} /bin/sh

install:
	pip install falcon

test:
	curl http://localhost:8000/things
