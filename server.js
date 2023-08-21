const express = require("express");
const parser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const session = require("express-session");
const cors = require("cors");
mongoose.connect("mongodb://127.0.0.1:27017/Login", {useNewUrlParser: true});


const app = express();
app.use(cors());
app.use(session({
    secret: "Hellohowareyou",
    resave: false,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(parser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(parser.json());


const schema = new mongoose.Schema({
    email:String,
    password:String
})
schema.plugin(passportLocalMongoose);
schema.plugin(findOrCreate);

const model = new mongoose.model("Login",schema);
passport.use(model.createStrategy());


passport.serializeUser(function(user1, done){
    process.nextTick(()=>{
        done(null, user1.id);
    })
});

passport.deserializeUser((id, done)=>{
    const signin = model.find({_id: id});
    signin.then((user1)=>{
        try{
            done(null,user1);
        }catch(err){
            
        }
    });
})

app.get("/",cors(),(req,res)=>{
    res.send("Hello World");
})

app.post("/register", (req,res)=>{
    const {username,email,password} = req.body;
    model.register({username: username,email:email},password, (err,d1)=>{
        if(err){
            console.log("Error found");
            console.log(err);
            res.json("not registered");
        }else{
            passport.authenticate("local")(req,res,()=>{
                res.json("registered")
            })
        }
    })
})

app.listen(8000,()=>{
    console.log("Started listening on port 8000");
})

