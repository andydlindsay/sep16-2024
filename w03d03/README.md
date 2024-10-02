# W03D03 - HTTP Cookies & User Authentication

### To Do
- [x] HTTP and cookies
- [x] Log user in
- [x] Protect pages against non-logged in users
- [x] User logout
- [x] Register user

### HTTP
* HTTP is a stateless protocol

* cookies preserve information between requests
* key/value pairs; value is always a string
* stored on the browser
* ALL cookies are sent to the server with every request
* cookies are domain specific localhost:5000 localhost:5001


/urls/new
/urls/:id

code folding

TTL Time To Live

```js
// setting a cookie
res.cookie('cookieName', 'cookieValue');

// reading a cookie
req.cookies.cookieName;

// clearing cookies
res.clearCookie('cookieName');
```





