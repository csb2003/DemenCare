const express= require('express')
const morgan= require('morgan')
const mongoose= require('mongoose')
const login_signup= require('./models/login_signup');
const SignUpschema = require('./models/login_signup');
const { result } = require('lodash');
const UserModel = require('./models/login_signup');



const app = express()

const dbURI= 'connection link'

// mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true} )
//     .then((result)=> app.listen(3000))
//     .catch((err)=>console.log(err))
app.listen(3000)
app.set('view engine', 'ejs')
app.use(express.static("public"));
app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render('login')
})

// app.post('/',async(req,res)=>{

//     try{
//         const check=await UserModel.findOne({name:req.body.name})
        
//         if(check.password===req.body.password){
//             res.render('index')
//             console.log("done")
//         }
//         else{
//             res.send("Wrong Password")
//         }
//     }
//     catch{
//         res.send("wrong details")
//     }
// })

app.post('/', (req, res) => {
    // if (req.body.name === "test" && req.body.password === "password") {
    //   res.render('index');
    // } else {
    //   res.send("Invalid credentials");
    // }
    res.render('index')
});
  


app.post('/signup',async(req,res)=>{
    const data={
        username:req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirm_pass: req.body.confirm_pass
    }

    try {
        // Create a new user document using the UserModel and save it to the database
        const user = new UserModel(data);
        await user.save();

        res.render('index');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating user");
    }
    await login_signup.insertMany([SignUpschema])
    res.render("index")
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.get('/quizz1',(req,res)=>{
    res.render('quizz1')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})


app.get('/analysis',(req,res)=>{
    res.render('analysis')
})

app.get('/index',(req,res)=>{
    res.render('index')
})

app.get('/game2',(req,res)=>{
    res.render('game2')
})
app.get('/select',(req,res)=>{
    res.render('select')
})
app.get('/info',(req,res)=>{
    res.render('info')
})

app.use((req,res)=>{
    res.status(404).render('404')
})