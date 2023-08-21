# Frameworks and Languages Module
Stub framework for "Frameworks and Languages" module

* Cloud VSCode IDE
    * GitHub CodeSpaces
        * [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/calaldees/frameworks_and_languages_module?quickstart=1)
        * Manage: https://github.com/codespaces/
        * Shutdown: `gh codespace stop`
        * Ports need to be set to `public` manually
            * [Allow for ports to be public by default #4068](https://github.com/orgs/community/discussions/4068)
            * `gh codespace ports visibility 8000:public -c $CODESPACE_NAME`
    * GitPod
        * [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/calaldees/frameworks_and_languages_module)
        * Manage: https://gitpod.io/workspaces
        * Shutdown: `gp stop`
        * [GitPod: granting-additional-github-oauth-permissions](https://www.gitpod.io/docs/configure/authentication/github#granting-additional-github-oauth-permissions)
            * `public_repo`, `repo` and `workflow`
