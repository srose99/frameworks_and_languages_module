Client
======
### For running the Vue.js solution please use:

➜ /workspaces/frameworks_and_languages_module (main) $ cd client/
➜ /workspaces/frameworks_and_languages_module/client (main) $ make build
➜ /workspaces/frameworks_and_languages_module/client (main) $ make run

### For running the React solution:

➜ /workspaces/frameworks_and_languages_module (main) $ cd client/client-react/
➜ /workspaces/frameworks_and_languages_module/client/client-react (main) $ make build
➜ /workspaces/frameworks_and_languages_module/client/client-react (main) $ make run

### For Vue.js solution testing please use the following:

➜ /workspaces/frameworks_and_languages_module (main) $ make test_client


### For React solution to run tests please change:

In "docker-compose.yml"
Please change:
client:
    build:
      context: ./client/

To:
client:
    build:
      context: ./client/client-react

### And then:

➜ /workspaces/frameworks_and_languages_module (main) $ make test_client