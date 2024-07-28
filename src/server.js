require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express(); //app express
const port = process.env.PORT || 8888;// port 
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app);

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Khai báo routes
app.use(webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
