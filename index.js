const express = require('express')
const app = express()
const port = 3000
const {User}=require("./models/User");
const bodyParser = require('body-parser');
const config = require("./config/key");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(()=> console.log('monggodb connected...'))
 .catch(err => console.log(err))

app.post('/register',async(req,res)=>{
    //회원가입할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body)

    try {
        const userInfo = await user.save();
        res.status(200).json({ success: true, userInfo });
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get('/', (req,res) => res.send('바로바로바뀜'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))