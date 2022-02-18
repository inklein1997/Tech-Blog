const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

require('dotenv').config({ path: require('find-config')('.env') });

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: process.env.session_key,
    cookie: {
        maxAge: 900000
    },
    httpOnly: false,
    resave:true,
    rolling: true,
    saveUninitialized: false,
    store: new SequelizeStore({ db:sequelize, checkExpirationInterval:90000 }),
};

app.use(session(sess))

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening at http://localhost:3001/'))
})