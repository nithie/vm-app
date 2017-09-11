const registrationService = require('../../services/registration');
const bcrypt = require('bcrypt');
const passport = require('passport');
const saltRounds = 10;

function registerNewUser(req, res) {
    bcrypt.hash(req.body.password, saltRounds, (err, hashed) => {
        if (err) { throw err; }
        const hashedPassword = hashed;
        const userData = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        }
        registrationService.addNewUser(userData, (err, result) => {
            if (err) { res.status(500).json({ 'message': `${err}` }); }
            req.login(req.body.email, (err) => {
                if (err) throw err;
                res.redirect('/home');
            });
          //  res.status(200).json({ message: `Welcome ${userData.name}` });
        });
    });
}

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    done(null, id);
});

module.exports = {
    registerNewUser,
}