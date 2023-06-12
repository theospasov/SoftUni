# Express and Templates 
## Creating a new Appointment
1. Create the Form in create.hbs the sends a POST request with the data to /catalog
2. To cath that POST request, we create the post router in createController - `router.post()` The function must be asynchronous, because we will be updating the data file on the file system
2.1 In `accomodationService.js` we create async function create(roomData) that will create the new record. THIS IS VERY IMPORTANT. We could just parse the data from the Form (req.body) as a new record in the database, but WE SHOULD'T. First, we need each room to have a unique ID, so we will add it here. Second, the user can edit the Form (with inspector) and send problematic data to the database. This is why we get the data from the Form, router it thorough  createController and parse it only to the needed fields (with create in accomodationService), before sending it to the database. 
2.2 In `createController.js` we update the router.post(), we need a try catch and to redirect if the request was successful. 

# Databases
! We will be moving things from index.js to separate modules in the config folder
* The configuration of Express JS & Handlebars is moved from index.js to config/express.js. Since the setup proccess requires `app`, we will export the setup and import in into index.js and add `app` as an argument 
* Since we will be using DB, we put all our main index.js operations in an async function
* The Routing is moved from index.js to config/routes.js.
1. We establish the connection to the Database in  /config/database.js. It must be async. We export it to the index.js
2. We create the Model Room in the models folder
3. We won't be using accommodationServices.js anymore, since we win't be working with a JSON file, but rather the Database. We create a new file that will be getting the data, called roomService.js
4. Now we start to update the Controllers. We will have to change the module for getAll and getById from accomodationService to roomService in all.
* In catalogController we have to make the router function async

# Authentication and Authorization

## Authentication
1. The user sends credentials
2. The server checks the credentials and if true we return a jwt as a cookie 
3. The client will save the jwt; each following request from him to the server will include the jwt.
4. Each time we get a new request, the server will have to validate the jwt (through a middleware) and if true the request will be able to reach the Controllers
---
1.1 authController: authController.get('/obtain' 
1.2 routers: app.use('/auth', authController)
1.3 config/express.js : app.use(cookieParser())
1.4 middlewares/auth.js: authController.get('/valudate'. The creating of the token will happen once, but the verification can be multiple times, that's why it will be a middleware before the Controllers.