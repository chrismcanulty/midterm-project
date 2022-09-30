// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./db/connection');

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  name: 'session',
  keys: ["Keys[0]"],
}))
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');
const logoutRoutes = require(`./routes/logout`);
const adminLoginRoutes = require(`./routes/adminLogin`);
const registerRoutes = require('./routes/registration');
const adminRegisterRoutes = require('./routes/adminRegistration');
const adminCreateItem = require(`./routes/adminCreateItem`);
// const temphomeRoutes = require('./routes/temphome');
const favouritesRoutes = require('./routes/favourites');
const itemsRoutes = require('./routes/items');
const adminRoutes = require('./routes/admin');



// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/admin',adminRoutes)
app.use('/favourites', favouritesRoutes);
app.use('/items', itemsRoutes);
app.use('/login', loginRoutes);
app.use(`/adminLogin`,adminLoginRoutes);
app.use(`/logout`,logoutRoutes);
app.use('/register', registerRoutes);
app.use('/adminRegister', adminRegisterRoutes);
app.use(`/adminCreateItem`, adminCreateItem);
app.use('/admin', adminRoutes);
// app.use('/home', temphomeRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  db.query('SELECT * FROM users WHERE users.id = $1', [req.session.userId])
  .then((result) => {
    const templateVars = {
      user: result.rows[0],
      userLogin: true,
      loggedIn: false,
      userId: 67,
      loggedIn: true,
      userChatId: "visitor_67",
      sellerChatId: "seller_32"
    }
    res.render('index', templateVars);
  });
    console.log('get home', req.session);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
