import express from 'express';
import { PORT, mongoURL } from './config.js';
import mongoose from 'mongoose';

const app= express();

//creating GET request
app.get('/', (request, response) =>{
    console.log(request)
    return response.status(234).send('You got it bro!')
})


//connect to the database
mongoose
    .connect(mongoURL)
    .then(() =>{
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });        
    })
    .catch((error) =>{
        console.log(error);
    })