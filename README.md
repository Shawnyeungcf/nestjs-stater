<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
## Required Nodejs version = 14
---

## Before start
https://docs.adminjs.co\
https://docs.nestjs.com/first-steps

---

## Setup local machine

```bash
$ npm i -g @nestjs/cli # install nestjs cli
$ yarn install
```

## Running the app
```bash
# development & watch mode
docker-compose up # brings up all needed services: mysql, phpmyadmin and then nestjs app.
```
App - http://localhost:3000\
phpmyadmin - http://localhost:8080

*All default environment variables are added to the `docker-compose.yml` file.

## Production
1. Copy all files from remote repository to the `prod` server machine.
2. Setup all needed environment variables on that machine.( See `.env` or `docker-compose.yml` -> `app` -> `services` -> `environment` ) for the app.
3. Run commands:
4. `yarn install`
5. `yarn build`
6. `yarn start:prod`// start the server

*Should better setup a startup shell script to help automate the steps above.

## License

Nest is [MIT licensed](LICENSE).
