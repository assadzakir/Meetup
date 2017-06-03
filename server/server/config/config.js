const devConfig = {
  DB_URL: 'mongodb://localhost/meetups',
  JWT_SECRET: 'qpoweirwierqpoweirqpowie',
};
const prodConfig = {
  DB_URL: 'mongodb://meetup:meetup@ds157390.mlab.com:57390/meetups',
  JWT_SECRET: 'qpoweirwierqpoweirqpowie',
};

export default prodConfig;
