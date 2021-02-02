const express = require('express');
const exphbs = require('express-handlebars');

const routes = require('./controllers/burgerController');

const PORT = process.env.PORT || 8080;

const app = express();

//serve static content
app.use(express.static('public'));

//middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//set up handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//pass routes to server
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

