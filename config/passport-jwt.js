// const passport=require('passport');
// const JWTStreatgy=require('passport-jwt').Strategy;
// const ExtractJWt=require('passport-jwt').ExtractJwt;

// const Doctors=require('../models/doctors');

// let opts={
//     JwtFromRequest:ExtractJWt.fromAuthHeaderWithScheme("jwt"),
//     secretOrKey:'Hospital'
// }

// passport.use(new JWTStreatgy(opts,   function(JwtPayLoad,done){
//        Doctors.findById(JwtPayLoad._id,function(err,doctor){

//    if(doctor){
//         return done(null,doctor)
//       } else{
//         return done(null,false);
//       }

//        });
      
// }))


// module.exports=passport;

const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctors');

// Here we are using passport authentication
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secrethospitalkey"
}


passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    Doctor.findById(jwtPayLoad._id, function(err, user){
        if (err){
            console.log('Error in finding user from JWT'); 
            return done(err,false);}

        if (user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    })

}));

module.exports = passport;