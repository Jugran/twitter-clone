const express = require('express');
const helmet = require('helmet');
const Knex = require('knex');
const { Model } = require('objection');

const kenxfile = require('./knexfile');
const { verifyAuth } = require('./middlewares/authenticate');

// import routes
const authRoutes = require('./routes/auth.routes');
const tweetRoutes = require('./routes/tweet.routes');


// init knex
const knex = Knex(kenxfile['development'])

// Give the knex instance to objection.
Model.knex(knex);

const app = express();

app.use(helmet());
app.use(express.json());


const PORT = parseInt(process.env.PORT);

app.post('/echo', (req, res) => {
    console.log(`Body:  ${JSON.stringify(req.body, null, 4)}`);
    return res.status(200).send({ "echo": req.body ?? {} });
});

app.use((req, res, next) => {
    console.log("Requested endpoint: ", req.url);
    next();
});

app.use('/auth', authRoutes);

app.use('/tweet', verifyAuth, tweetRoutes)


app.listen(PORT, () => {
    console.log("Server is up on port", PORT);
});