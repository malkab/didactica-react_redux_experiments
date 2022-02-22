# Guidelines to Bootstrap a React App with Typescript

Steps:

- [x] run the Docker container with **docker/010**. Change the serve port if conflicts with another app. Landing folder is the root of the repo;

- [x] at the top of the repo, bootstrap the app with TypeScript (or without). Don't worry if it complains about not being able to initialize a Git repo:

```shell
yarn create react-app node --template typescript
```

- [x] at **package.json**, change **version** to 0.0.1;

- [x] complement generated **package.json** with following entries between **private** and **dependencies**:

```json
"description": "REWRITE-ME",
"scope": "SCOPE-ME",
"author": {
  "name": "MY-NAME",
  "email": "MY-EMAIL@EMAIL.COM",
  "url": "HTTP://MY-URL"
},
"keywords": [
  "PUT-NEW-KEYWORDS-HERE",
  "ANOTHER-ONE-HERE"
],
"license": "UNLICENSED",
"repository": {
  "type": "git",
  "url": "https://gitlab.com/malkab/code-samples.git"
},
```

- [x] substitute **package.json/scripts** with this one, changing the port to match that of the Docker if needed:

```json
"scripts": {
  "start": "export PORT=3000 ; react-scripts start",
  "build": "export PORT=3000 ; react-scripts build",
  "test": "export PORT=3000 ; react-scripts test",
  "eject": "export PORT=3000 ; react-scripts eject",
  "serve": "serve -p 3000 --cors --single --debug --no-clipboard build"
},
```


## package.json Scripts

Match ports in scripts to the port that was open in Docker. Default is 3000, don't change anything if the Docker port is unchanged.

Available scripts:

- **start:** starts the development server;

- **build:** builds the app;

- **test:** runs tests (Jest based, not very familiar with them yet);

- **eject:** does something about not shadowing lots of packages used under the hood or something like this;

- **serve:** serves the built app (run **build** target first).


## Debugging in Visual Studio Code and Chrome

Works very well. Create a debugging configuration like this one:

```json
{
  "type": "pwa-chrome",
  "request": "launch",
  "name": "React Experiments",
  "url": "http://localhost:3000",
  "webRoot": "${workspaceFolder}",
  "stopOnEntry": true,
  "sourceMaps": true
}
```

Configure and change the port if needed.

Sometimes Chrome's processes got stuck in memory and VSC complain about a debugging session already running. Clean processes with:

```shell
clear ; ps aux | grep chrome
kill -9 [process ID]
```
