require('dotenv').config()

const express = require('express')
const PORT = process.env.PORT

const app = express()

app.get('/', (req,res)=> {
    res.send('welcome to an Awesome App about breads!')
})

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads',breadsController)

app.listen(PORT, () => {
    console.log('listening on port' , PORT)
})

// use npx nodemon to update the server and control c to close it 
// use localhost/3000 to view the home page 