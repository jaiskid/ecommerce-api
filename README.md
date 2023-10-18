- Please find the below details level of application

  - Application Architecture and stack

    - Express
    - Mongo DB atlas
    - Language support : Typescript
    - Application authentication : JWT , Session

  - Application overview and installation
  
    - After clonning the application from github (https://github.com/jaiskid/ecommerce-api.git)
    - Do npm install using package.json
    - MongoDB cluster is enabled globally for all the IP address
    - Create .env file in location and use share details over the email
    - After configuration do run npm start
  
  - Installed package used for Developement
  
    - Mongoose
    - Crypto
    - Typescript with types modules
    - Nodemon
    - express
    - http
    - body-parser
    - compression
    - Jsonwebtoken
    - lodash
  
  - Application Modules for ecommerce api
  
    - Authhelper
    - Controller
    - Middleware
    - Models
    - routes
      main index.ts file which drive the whole application using express and http module majorly
  
  - Feature support
  
    - Authentication using JWT for API end point security
    - Authentication also have session management
    - User login via MongoDB cluster info
    - Password salt and hasing
    - User registration
    - User login support
    - Products insertion , deletion, updation, retrieval
    - Manage order
    - Manage Cart
    - Calculate sales Revenue
  
  - Routes
    Once application is hosted it will exposed on port 8080
  
    - Auth
  
      - /auth/register
      - /auth/login
  
    - Users
  
      - /users GET
      - /users/:id DELETE, GET
      - /users/stats
  
    - Product
  
      - /product/addnew
      - /product/
      - /product/:id
  
    - Order
  
      - /order/addnew
      - /order/:id
      - /order
      - /order/revenue
  
    - Cart
  
      - /cart/addnew
      - /cart/:id
      - /cart
        
Please do import ecommerce-apicollection.json in postman that file will help you to execute API endpoints 

  
  Author : Neeraj Jaiswal
