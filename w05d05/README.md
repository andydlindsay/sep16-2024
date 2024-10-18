# W05D05 - Mid-term Project Kickoff

### the why of midterms
* teamwork
* reinforce everything you've learned

### pick a project

### user stories
* describes how a user interacts with our app
* As a ______, I can _____, because _____

As a logged in user, I can create a quiz, because I want to annoy my friends
As a logged in user, I can put pins on a map, because I want to share info with others

/planning/user-stories.md

### identifying nouns
* nouns are tables
* ERD

planning/erd.png
planning/erd-stretch.png

### routes
* RESTful routing

Browse  GET   /fooditems
Read    GET   /fooditems/:id
Edit    POST  /fooditems/:id
Add     POST  /fooditems
Delete  POST  /fooditems/:id/delete

planning/routes.md

### MVP
* Minimum Viable Product
* KV Minimum Viable Demo (MVD)
* focus on the minimum feature set that you can demo in 5 mins
* if you're not gonna show it, don't build it

### Wireframes/Mockups
* lowest fidelity possible

planning/wireframe.png


public/styles/styles.css

1. styles/login.scss
2. <Link href="login.css" />
3. automatically compiled => public/styles/login.css
4. express static will serve up the file

### User Login
* don't do it

```js
// localhost:8000/login/5
app.get('/login/:id', (req, res) => {
  // plaintext
  res.cookie('userId', req.params.id);

  // encrypted
  req.session.userId = req.params.id;

  // send the user somewhere
  res.redirect('/');
});
```

### Tech Choices
* Backend: Node, Express, Postgres
* Frontend: HTML, CSS, JS, jQuery, bootstrap, tailwind

### SPA vs MPA
* they're not mutually exclusive

### Communication
* midterm scrum




