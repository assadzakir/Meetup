import express from 'express';
import dbConfig from './config/db'
import middlewaresConfig from './config/middlewares';
import{MeetupRoutes, GroupRoutes} from './modules'
const app = express();

// database
dbConfig();

//middlewares

middlewaresConfig(app);
app.get('/',function (req, res) {
  res.send('Meetups API is Running')
});
app.use('/api',[MeetupRoutes, GroupRoutes])

const PORT = process.env.PORT || 3000

app.listen(PORT,err => {
    if(err){
        console.log(err);
    }{
        console.log(`App listen to port: ${PORT}`)
    }

})
