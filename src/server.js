require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')
const mongoose = require('mongoose')

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

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const cat = new Kitten({ name: 'Meo meo' });

console.log(cat.name); // 'Silence'

cat.save();

(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`)
    })
  } catch (error) {
    console.log(`>>> Error connect to DB: `, error)
  }
}
)()

