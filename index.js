const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ADMIN:ehdwnsdl@cluster0.8pfhgxq.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(()=> console.log('monggodb connected...'))
 .catch(err => console.log(err))



app.get('/', (req,res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))