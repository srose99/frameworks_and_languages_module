Server
======
### For running of Express solution:
➜ /workspaces/frameworks_and_languages_module (main) $ cd server/
➜ /workspaces/frameworks_and_languages_module/server (main) $ make build
➜ /workspaces/frameworks_and_languages_module/server (main) $ make run

### For running Falcon solution:
➜ /workspaces/frameworks_and_languages_module (main) $ cd server/Falcon/
➜ /workspaces/frameworks_and_languages_module/server/Falcon (main) $ make build
➜ /workspaces/frameworks_and_languages_module/server/Falcon (main) $ make run


### For Express.js solution please use the following:

➜ /workspaces/frameworks_and_languages_module (main) $ make test_server

### For Falcon solution to run tests please change:

In "docker-compose.yml"
Please change:
server:
    build:
      context: ./server/

To:
server:
    build:
      context: ./server/Falcon

### And then:

➜ /workspaces/frameworks_and_languages_module (main) $ make test_server