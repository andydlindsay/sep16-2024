const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');

const app = express();
const port = 1399;

const users = {
  userRandomID: {
    id: "userRandomID",
    email: "a@a.com",
    password: bcrypt.hashSync('hello'),
  },
  user2RandomID: {
    id: "user2RandomID",
    email: "b@b.com",
    password: "$2a$10$7NpwFqVdLLEEe3A41CKq5e4goxQEkI8RCv/H1OuNmSXrWIbTPkmWi",
  },
};

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // creates and populates req.body
// app.use(cookieParser()); // creates and populates req.cookies
app.use(cookieSession({
  name: 'whatever',
  keys: ['asdklfhasjkdfhk'],
})); // encrypt and decrypt all cookies for us (req.session)

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  // grab the email and password from the body
  const email = req.body.email;
  const password = req.body.password;

  // did they NOT provide an email or password
  if (!email || !password) {
    return res.status(400).send('you must provide an email and a password')
  }

  // find the user based on the email provided
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      // we found our user
      foundUser = user;
    }
  }

  // check if we DID NOT find a user
  if (!foundUser) {
    return res.status(400).send('the email you provided does not exist');
  }

  // does the provided password NOT match the stored one
  const result = bcrypt.compareSync(password, foundUser.password);

  // if (foundUser.password !== password) {
  if (!result) {
    return res.status(400).send('the passwords dont match');
  }

  // happy path! the user is who they say they are!

  // give them a cookie
  // res.cookie('userId', foundUser.id);
  req.session.userId = foundUser.id;

  // redirect the user
  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  // grab the userId cookie value
  // const userId = req.cookies.userId;
  const userId = req.session.userId;

  // check if the cookie value is falsey
  if (!userId) {
    // the user doesn't have a cookie
    return res.status(401).send('you must be signed in to see this page');
  }

  // happy path! they have a cookie!
  // lookup the user based on their cookie
  const user = users[userId];

  const templateVars = { user: user }

  res.render('protected', templateVars);
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the cookies
  // res.clearCookie('userId');

  // req.session.userId = null; // { userId: null }
  req.session = null; // deletes all cookies


  // redirect the user somewhere
  res.redirect('/login');
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  // grab the email and password from the body
  const email = req.body.email;
  const password = req.body.password;

  // did they NOT provide an email or password
  if (!email || !password) {
    return res.status(400).send('you must provide an email and a password')
  }

  // lookup the user based on their email
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      // unhappy path; duplicate email
      foundUser = user;
    }
  }

  // did we find a user?
  if (foundUser) {
    return res.status(400).send('email already exists');
  }

  // email must be unique!

  // create a new user object
  const id = Math.random().toString(36).slice(2); // gives us a random alphanumeric string

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const newUser = {
    id: id,
    email: email,
    password: hash,
  };

  users[id] = newUser;
  console.log(users);

  // log the user in / set a cookie
  // res.cookie('userId', id);
  req.session.userId = id;

  res.redirect('/protected');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
