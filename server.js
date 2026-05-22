import express from 'express';
import { posts } from './data/posts.js';

const app = express();
const url = process.env.SERVER_URL;
const port = process.env.SERVER_PORT || 3000;

const messaggioOk = {
    messaggio: 'va tutto bene nel server'
};

app.get("/", (request, response) => {
    response.json(messaggioOk)
});

app.get("/bacheca", (request, response) => {
    response.json(posts.map(post => {
        return {
            ...post,
            img: `http://${url}:${port}/bacheca/${post.img}`,
        }
    }));
})

app.listen(port, (error) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('server in ascolto a questa porta: ', port);

});