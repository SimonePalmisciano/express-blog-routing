import express from express;

const app = express();
const url = process.env.SERVER_URL;
const port = process.env.SERVER_PORT;

app.listen(port, (error) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('server in ascolto a questa porta: ', port);
    
});