# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [ ] Method Override [Stretch]


### Hashing
* one way process
* plaintext password => hashing algo => hash (60 character string)
* test password => hash it in the same way as the og password => hash
* rainbow table attacks
* salt is a randomly generated string that is added to the password before hashing
* plaintext password + salt => hashing algo => hash (60 char string)



'hello' + 'asdfkashdfkjahsdkfhaksd' => hash
'hello' + 'fhasdjkfhajksdhfjasdfnh' => hash


### Encryption
* two way process
* encrypt => decrypt
* cookie-session middleware

plaintext cookies => middleware => browser

browser => middleware => plaintext cookie

```js
// setting a cookie
req.session.cookieName = 'cookieValue';

// reading a cookie
req.session.cookieName

// clearing a cookie
req.session.cookieName = null;
req.session = null;
```

http://localhost:1399/protected

Monster in the middle attack

HTTPS
HTTP Secure
https://www.google.com/

### Asymetric Encryption
* one key to lock
* one key to unlock
* public key is available to everyone
* private key is kept secret

### REST
* Representational State Transfer
* naming convention for routes

GET /all-the-urls
GET /show-me-just-one-url-please/:id

* RESTful
* resources are plural
* actions are singular

POST /login

Browse  GET   /dinosaurs
Read    GET   /dinosaurs/:id
Edit    POST  /dinosaurs/:id
Add     POST  /dinosaurs
Delete  POST  /dinosaurs/:id/delete

Browse  GET     /dinosaurs
Read    GET     /dinosaurs/:id
Edit    PATCH   /dinosaurs/:id
Add     POST    /dinosaurs
Delete  DELETE  /dinosaurs/:id

app.get()
app.put()
app.patch()
app.delete()

### Moar Methods!!
* PUT => updates; replace a resource completely
* PATCH => updates; replace a piece of resource
* DELETE => deletes a resource
* semantic aliases for POST
