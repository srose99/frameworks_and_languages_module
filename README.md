# Frameworks and Languages Module
Stub framework for "Frameworks and Languages" module

* Cloud based development environnement
    * GitPod
        * https://gitpod.io/#https://github.com/calaldees/frameworks_and_languages_module
    * GitHub CodeSpaces
        *  https://codespaces.new/calaldees/frameworks_and_languages_module
        * Ports need to be set to `public` manually
            * [Allow for ports to be public by default #4068](https://github.com/orgs/community/discussions/4068)
            * `gh codespace ports visibility 8000:public -c $CODESPACE_NAME`

* https://editor.swagger.io/
* https://editor-next.swagger.io/
* [ReDoc openapi.yml](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/calaldees/frameworks_and_languages_module/main/openapi.yml)
    * ```bash
        # https://stackoverflow.com/a/50983113
        npm install redoc-cli
        $(npm bin)/redoc-cli bundle -o openapi.html openapi.yml
        ```