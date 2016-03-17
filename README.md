# Surveyor

Simple Mysql Express Angular stack for giving random surveys to guests and allowing an admin to create survey questions for guests.
@TODO: add survey reporting

# Surveyor Server

code in project root and `server` dir

- to load docker mysql image `docker pull mysql`
- to install dependencies: `npm install`
- update `dev.env` with appropriate info for usage of docker
- to generate certs for jwt auth `npm run dev-generate-certs`
- to start docker db container, run `npm run dev-database-start`
- to initialize db with app tables, run `npm run dev-database-init`
- to connect to db in shell, run `npm run dev-database-connect`
- for developement `npm start` and goto [http://localhost:3000](http://localhost:3000)

`npm start` command will also run a build of client and server those assets.

For development, client can run its own web server (with live reload) and proxy requests to services

# Surveyor Client

code in `client` directory

See `README.md` in `client` folder for info about client