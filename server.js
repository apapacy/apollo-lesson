require("babel-core").transform("code", {
  plugins: ["transform-react-jsx"]
});
const express = require('express');
const bodyParser = require('body-parser');
const render = require('./build/render');

const port = Number(process.env.PORT) || 3000;
const nodeEnv = process.env.NODE_ENV || 'development';
const app = express();
app.set('env', nodeEnv);
// app.use(bodyParser.json());
app.use('/', express.static('build'));


app.use('/', render);

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
