const express = require("express");
const path = require("path");
const knex = require("knex");
const userRouter = require("./routes/user.router");

const database = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '',
        database: 'porfolio'
    }
});

database.select('*').from('users').then(data => {
    console.log(data);
});

const app = express();
const PORT = 3434;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.path} ${delta}ms`);
});
app.use('/site', express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT} ...`);
});