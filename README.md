# Express API REST example
This repository shows how to implement a basic API REST with Node and Express.

The main objective is provide a template for classic CRUD operations.

There is no logic related with the operations, just dumb endpoints.

## Instalation
You must have `node` and `npm` installed in your machine, then after clone the project you must execute:

```
npm install
```

## Execution
In order to execute the example you must execute:
```
node server.js
```

## Endpoints
The following enpoints were implemented:

  - Tasks:
    - List all: GET /tasks
    - Find by id: GET /tasks/{id}
    - Create new task: POST /tasks
    - Edit existing task: PUT /tasks/{id}
    - Change task state:  PUT /tasks/{id}?state=completed
    - Delte task: DELETE /tasks/{id} 
    
## Test endopoints
Additionaly the file `task.http` is included, this file can be executed with IntelliJ Idea or VsCode with the plugin "REST Client" from Huachao Mao.