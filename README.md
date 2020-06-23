# demo-typescript-pulse

# Overview
User Authentication will be done from screen through authlock, and user profile will be fetched from the same.
With the user detail first backend service will get triggered, and a JWT token will be served as response.
Now from next time onwards every call should be made with the auth token to make a secure connection. 

# Workflow
Theree different service are there, 
# ApiService: 
Playing a role as a gateway, all kind off authentication,authorization,routing,error handling etc. are done here.
# AuthService: 
Authentication of user detail are done here and JWT token is signed. [We have to work more on this as no such basic authentication we are doing from the server side only generating the JWT token.]
# PulseService: 
This is the actual srvices that serves our need for frontend React application. For demo purpose we have created one service to get all the organizations. 

# Next What?
Database integration and fetch pulse related data and KPI assets.

## NPM scripts
- `npm run dev` - Start development mode (load all services locally with hot-reload & REPL)
- `npm run build`- Uses typescript to transpile service to javascript
- `npm start` - Start production mode (set `SERVICES` env variable to load certain services) (previous build needed)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run lint` - Run ESLint
- `npm run ci` - Run continuous test mode with watching
- `npm test` - Run tests & generate coverage report
- `npm run dc:up`: Start the stack with Docker Compose
- `npm run dc:down`: Stop the stack with Docker Compose
