# node_starter

Scaffolding for a node backend using sqlite

1. npm init -y

2. Delete the following in package.json:

"repository": {
"type": "git",
"url": "git+https://github.com/charlie-may86/node-api1-guided.git"
},
"keywords": [],
"author": "",
"license": "ISC",
"bugs": {
"url": "https://github.com/charlie-may86/node-api1-guided/issues"
},
"homepage": "https://github.com/charlie-may86/node-api1-guided#readme"

3. npx gitignore node

4. install the following:

npm install express
npm install cors
npm install dotenv
npm install helmet
npm install knex
npm install sqlite3

5. npm i -D nodemon to restart our server automatically when we make changes to the code

6. add start and server scripts to package.json:
   "start": "node index.js",
   "server": "nodemon index.js",

7. npx eslint --init

   1. to check syntax and find problems
   2. CommonJS (require/exports)
   3. None of these
   4. No (the project does not use typescript)
   5. Toggle using spacebar to have only Node on
   6. JSON
   7. Yes

8. add an index.js file to the root
9. add a .env file to root
10. add config.js file

11. Make knex.js file in rout of project
12. Make file in data folder called db-config
13. in console type: `npx knex migrate:make initial-migration` (48:50 in video)
    a. migration folder will appear
14. go to migration folder and write a migrate up and down
15. in console type: `npx knex migrate:up` (1:00:21 in video)
    a. if everything went well, you should be able to look at the table in sqlite here
    b. you could type: `npx knex migrate:dwon` which would remove the table
16. instead of doing console commands, you can write scripts as follows:
    all can be ran with npm run whatever
    a. "up": "knex migrate:up",
    b. "down": "knex migrate:down",
    c. "latest": "knex migrate:latest",
    d. "rollback": "knex migrate:rollback",
    e. "seed": "knex seed:run"
17. To make seed file: `npx knex seed:make seed-name`
    a. creates seed file with the name
    b. change del() to truncate() in the return statement
    c. make sure to delete the id row!!
    d. seed with what ever data you please
18. When ready, `npm run seed`
