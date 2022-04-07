const express = require('express');
const helmet = require('helmet');
const Knex = require('knex');
const { Model } = require('objection');
const cors = require('cors');

const kenxfile = require('./knexfile');
const { verifyAuth } = require('./middlewares/authenticate');

// import routes
const authRoutes = require('./routes/auth.routes');
const tweetRoutes = require('./routes/tweet.routes');
const profileRoutes = require('./routes/profile.routes');


// init knex
const knex = Knex(kenxfile['development'])

// Give the knex instance to objection.
Model.knex(knex);

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());


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

app.use('/tweets', verifyAuth, tweetRoutes);
app.use('/profile', verifyAuth, profileRoutes);


app.listen(PORT, () => {
    console.log("Server is up on port", PORT);
});