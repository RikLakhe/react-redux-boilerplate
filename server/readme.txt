Most browsers currently doesn’t support ES6,
so we are going to make use of babel to transpile our code from ES6 to ES5 so as to run on our browser.

npm install babel-preset-env --save-dev npm install babel-cli --save
npm install babel-core --save
.babelrc ============ { "presets": ["env"] }

"scripts": { "start": "nodemon --exec babel-node app.js", }
nodemon to run the application && babel-node to transpile our application from ES6to ES5

