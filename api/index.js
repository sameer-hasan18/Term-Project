import express from 'express';
import mongoose from 'mongoose';

mongoose
    .connect("mongodb+srv://hiveatwork:hiveatwork@hospital-management.4t5xuja.mongodb.net/CMPT276?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to MongoDB!');
      })
      .catch((err) => {
        console.log(err);
      });
      
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})