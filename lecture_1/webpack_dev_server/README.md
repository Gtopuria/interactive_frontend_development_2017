# Webpack example

## Running the application

```
npm install
npm run start
```

#### Expected behaviour

* A title in the center of a greenish background is seen on the page

## Explanation

`npm run start` points to a script in `package.json`
That script runs `webpack-dev-server --open --config webpack.config.js`. The `open` flag opens the default browser on the specified port (default 8080) on localhost. Browser will look for index.html and require the specified JavaScript file(dist/bundle.js) from there.

Try changing src/index.js and see that the browser pages refreshes automatically once you save your change.
