# node_starter

Scaffolding for a node backend using sqlite

1.

npm init -y

2.

Delete the following in package.json:
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

3.
npx gitignore node

4.

npm install express
npm install cors
npm install dotenv
npm install helmet

5.

npm i -D nodemon to restart our server automatically when we make changes to the code

6.

add start and server scripts to package.json:
"start": "node index.js",
"server": "nodemon index.js",

7.

npx eslint --init

    1.  to check syntax and find problems
    2. CommonJS (require/exports)
    3. None of these
    4. No (the project does not use typescript)
    5. Toggle using spacebar to have only Node on
    6. JSON
    7. Yes

8. add an index.js file to the root
9. add a .env file to root
10. add config.js file
