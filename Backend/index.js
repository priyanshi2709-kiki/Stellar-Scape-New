const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');
const port = 3000;


const githubUsers = {};

const app = express();
const cors = require('cors');

// Define User model
// let profile = User.profile
const User = mongoose.model('User', new mongoose.Schema({
    githubId: String,
    username: String,
    displayName: String,
}));

const UserDataRouter = require('./Routers/UserData')
const UserRouter = require('./Routers/user')
const contactRouter = require('./Routers/contact')
const addProjectRouter = require('./Routers/addProject')
const utilRouter = require('./Routers/util')
const adminRouter = require('./Routers/AdminLogin')


app.use(cors({
    origin: ['http://localhost:5173']
}))
app.use(express.json());
app.use('/userData', UserDataRouter)
app.use('/user', UserRouter)
app.use('/contact', contactRouter)
app.use('/project', addProjectRouter)
app.use('/util', utilRouter)
app.use('/admin', AdminLoginRouter)

// Configure GitHub strategy for Passport
passport.use(new GitHubStrategy({
    clientID: 'af274aebeef6ccbf2260',
    clientSecret: '844fa12d9b3384f637d9d0de8b3cf87700fec991',
    callbackURL: 'http://localhost:3000/auth/github/callback',
},
    async (accessToken, refreshToken, profile, done) => {
        // Check if user already exists in the database
        let user = await User.findOne({ githubId: profile.id });
        console.log(profile);

        if (githubUsers[profile.username] === undefined) {
            githubUsers[profile.username] = profile;
        }

        console.log('added ' + githubUsers[profile.username]);
        // req.session.profile = profile;
        if (!user) {
            // Create a new user if not found
            user = new User({
                githubId: profile.id,
                username: profile.username,
                displayName: profile.displayName,
                created_at: Date,
            });
            console.log(user);
            await user.save();
        }

        return done(null, user);
    }));

// Serialize and deserialize user for sessions
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

// Configure Express to use Passport and sessions
app.use(session({ secret: 'your-session-secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/auth/github',
    passport.authenticate('github'));

app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: 'http://localhost:5173/failed' }),
    (req, res) => {
        // res.redirect('http://localhost:5173');
        res.redirect('http://localhost:5173/authenticated/' + req.user.username);
    });

app.get('/logout', (req, res) => {
    req.logout();
    req.user = null;
    res.redirect('/');
});

app.get('/user/:username', (req, res) => {
    console.log('user : ' + githubUsers[req.params.username]);
    if (githubUsers[req.params.username]) {
        res.json(githubUsers[req.params.username]);
    } else {
        res.status(401).send('Not authenticated');
    }
});

app.get("/logoutUser/:id", (req, res) => {
    console.log('user : ' + githubUsers[req.params.id]);
    if (githubUsers[req.params.id]) {
        delete githubUsers[req.params.id];
        console.log("Successfully Logout")
        res.json({ message: 'successfully logout' });
    } else {
        res.status(401).send('Not authenticated');
    }
});

app.get('/', (req, res) => {
    res.send(req.isAuthenticated() ? `<p>Hello, ${req.user.displayName}! <a href="/logout">Logout</a></p>` : '<p>Hello, guest! <a href="/auth/github">Login with GitHub</a></p>');
});




app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
}
);