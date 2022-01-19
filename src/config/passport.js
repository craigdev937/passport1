import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy }from "passport-local";
import { User } from "../models/User.js";

passport.use(
    new Strategy({usernameField: "email"}, 
    (email, password, done) => {
        // Match user
        User.findOne({ email: email })
        .then((user) => {
            if (!user) {
                return done(null, false, {msg: "No User Found!"});
            }
            // Match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {msg: "Password Incorrect!"});
                }
            })
        })
    })
);




