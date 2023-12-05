Server
======

For Falcon solution to run tests please change:

In "docker-compose.yml"
Please change:
server:
    build:
      context: ./server/

To:
server:
    build:
      context: ./server/Falcon

And run the tests again to see falcon solution test results