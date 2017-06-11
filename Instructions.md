Personal details:
email: nimrodbahar@gmail.com

mobile number: 06 50 68 85 98

Context:

This react SPA is an exercise in data visualization.
The idea is straight forward:
   - There is a 2X2 grid with logos of different tech companies.
   - Clicking on each will render a popup component to the screen.
   - That popup component renders a chart with that companys' data, as extracted from the JSON data file.

Build process notes:

webpack.config.js

 - Webpack for bundling the project.
   - Necessary webpack loaders:
     - babel-loader > In order to compile ES6 syntax.
     - style-loader & css-loader > In order to load CSS.
     - json-loader > In order to read JSON format.
     - url-loader & image-webpack-loader > In order to render images.

package.json:

 - webpack-dev-server > To provide us with a server with hot reloading (which is cool).
 - highcharts & react-highcharts > To provide us with charts to render.
 - babel-preset-react > A babel pre configured library to compile React syntax.
 - underscore > Provides us with utilities functions.

 SO WHAT'S GOING ON?
 - Our app's entry point as defined in webpack.config.js is: /client/index.html
 - The index.js script loads all the necessary libraries for our react project and also the ToggleGrid component.
 Then it passes the ToggleGrid component into ReactDOM render method and specify the id of the html tag where
 we want to render it (=the ToggleGrid component).
 - ToggleGrid component loads the styles and the necessary images as well as the Popup component.
 In his constructor function he keeps track of the state object which is in charge on whether or not show the Popup component and what data to pass to it.
 - Popup component passes received props down to the StockChart component.
 - According to those props, the StockChart, reads the JSON and renders the corresponding data into stock chart.

 What doesn't work?
 - by looking at the react-highcharts highstock demo: (https://github.com/kirjs/react-highcharts/blob/master/demo/src/highstock.jsx)
 in the multidimensional array it appears that each array item inside the containing array, has the unix time in milliseconds at position zero [0] and the stock price at position [1]. For some reason, when trying to pass these values, the chart was broken.
