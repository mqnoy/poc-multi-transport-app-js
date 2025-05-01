# poc-multi-transport-app-js
the purposes its handle domain with multiple transport

### Get Started
1. clone the repositry
1. follow your imagination

## Enviorment variables


| Variabel | Example value | description |
| ------ | ------ | ------ |
| DB_USERNAME    |   root   |      |
|  DB_PASSWORD    |  your-password    |      |
|  DB_DATABASE    |    recipe_db  |      |
|  DB_HOST    |   localhost   |      |
|  DB_DIALECT    |  mysql    |      |


## Example HTTP Request

POST http://0.0.0.0:3000/api/recipes/
```
curl --location 'http://localhost:3000/api/recipes/' \
--header 'Content-Type: application/json' \
--data '{
    "title": "asdasd",
    "ingredients": "1",
    "instructions": "asdasd"
}'
```

GET http://0.0.0.0:3000/api/recipes/
```
curl --location 'http://localhost:3000/api/recipes/'
```

## Example GRPC Request

just put the .proto to postman

## TODO
[x] auto completion with jsdoc ` /** @type {import('./ClassName')} */`
[x] service locator 
[x] async wrapper catch 🤔
[x] multiple transport 
[x] interceptor for grpc
[ ] authentication, authorization, RBAC
[ ] middleware
[ ] event driven can be consumer or producer 🤔
[ ] observability
[ ] worker_threads, hemmm 🤔