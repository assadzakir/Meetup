import mongoose from 'mongoose';

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://meetup:meetup@ds157390.mlab.com:57390/meetups');
    mongoose.connection.once('open',() => console.log('Mongodb running'))
        .on('error',err => console.log(err))
        
}