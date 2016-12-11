# Test App
Test App Repo

## Setup

```bash 

(sudo) npm install -g gulp webpack webpack-dashboard
  
git clone
    
cd test-app
  
npm install

npm run serve:server

npm run serve:client

``` 

### NPM Tasks
Here's a list of available tasks:

* `serve:client` - serving client side code
* `serve:server` - serving server side code
* `build:client` 
* `build:server`
* `test:server`
* `lint`
  
## Build System
We are using Gulp and Webpack together for its build system.

`Gulp` handles all SERVER-SIDE  transpiling and serving

`Webpack + Gulp` handles all CLIENT-SIDE  file-related concerns for:

* Transpiling from ES6 to ES5 with `Babel`
* Loading HTML files as modules
* Transpiling stylesheets and appending them to the DOM
* Refreshing the browser and rebuilding on file changes
* Hot module replacement for transpiled stylesheets
* Bundling the app
* Loading all modules

