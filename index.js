const express=require('express');

const app=express();

const port=8000;

const PassportJwt=require('./config/passport-jwt');

const MongoStore=require('connect-mongo');

const session=require('express-session');

const db=require('./config/mongoose');

const cookieParser=require('cookie-parser');

const BodyParser=require('body-parser');

app.use(BodyParser.json());

app.use(BodyParser.urlencoded({ extended: true }))

app.use('/', require('./routes'));


app.use(session({
    name:'CodeWithAmit',
     //ToDo change the secret before deployment in produnction mode
    secret: 'blasomething',
    saveUninitialized:false,
    resave:false,
    cookie: {
     maxAge:(100*60*100)
    },
    store: MongoStore.create({
       mongoUrl:"mongodb://127.0.0.1/hospitalApiDevleop",
       autoRemove:'disabled'
 
    },function(err){
     if(err){
       console.log('err');   
     }
    })
      
  }));



app.listen(port,function(err){
    if(err){
        console.log("Eror in connecting to express server ",err)
    }
    console.log("Ya Successfully connected to express server on port :",port);
})