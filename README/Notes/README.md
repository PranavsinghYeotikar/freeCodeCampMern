<img src="src/MongoDB.png" alt="express" width="20" />
Database

- To store data.

<img src="src/express.png" alt="express" width="20" />
Web Framework
 
- A web framework is a **ready-to-use toolbox** for building web apps faster and more easily.
- **Web Framework**
  - It saves times
  - Makes code cleaner and more organized
  - Helps to route, handke error, etc.


<img src="src/nodejs.png" alt="express" width="20" />
JS Runtime

- becuase of nodejs we can **run js on server**

<img src="src/react.png" alt="express" width="20" />
Frontend

- we make frontend by this

<br>
<br>
<br>

****

# `req`, `res`
- it is used in express
****


# API
- It allows two different apps(client and server) to talk to each other.

![api](src/api.png)

### Why we need api?
- **cant we remove that waiter, and directly ask data from server???**
  - **ans->**  ui can directly interact with database
  - some user may misuse it ☠️

### Types of API
**REST API**
It uses **http methods**
1) `GET`
2) `POST`
3) `PUT`
4) `DELETE`


when we write
- `app.get('/api/')` the server is saying, "THAT IF SOMEONE REQUEST GET(SOMEONE OPENS THIS PAGE) 
- then send this(`You got 5 notes`)" to them as `res`(response) for `req`(request)
```
app.get('/api/notes', (req,res)=> {
    res.send("You got 5 notes")
})
```
****

# HTTP STATUS CODE
### 1XX - Infromational

### 2XX - Success ✅
  - `200`, OK - everything worked as expected
  - `201`, Created - Posted successfully

### 3XX - Redirection ⚠️
  - This tell "Hey, the thing you are looking for, is somewhere else".
  - `301` - moved permanently
    - ex `https://example.com` moved to `https://planer.com`
    - we must give this status code when we change the names or mode

### 4XX - Client Error ❌
- Error on client side, client made some error
  - `400` - **Bad Request** - invalid or bad request is made by client.
  - `401` - **Unauthorized** - without log in when we do something then this must show up.
  - `403` - **Forbidden** - Not allowed to access
  - `404` - **Not found** - URL doesnt exist
  - `429` - **Too many request**


### 5XX - Server side errors 💥
- when there is issue in the server then this must show up
- SERVER TRIED BUT FAILED
  - `500` - **Internal server error** - something broke on server
  - `503` - **Service unavailable** - server is down or overloaded

****


# Working of a Full Stack App
We have **client** -> **frontend**, **server**-> **backend**, **database**
- Client sends a `req` to server, 
- server deals with it 
- then server sends the data to the client from database
- and the ui gets updated





****


# Imp point

## Why we use `node` and `nodemon`?
* We use `nodemon` only while we are develpoing 
> nodemon server.js
  * **Why?**
  * because we want to develope, see the cahnges instanyly we have made.
* Once we deploy it we then dont use nodemon, then we must use `node` only.
> node server.js
  * **Why?**
  * We dont want to change the code even if small change is made while updating it, thats why we must use `node`