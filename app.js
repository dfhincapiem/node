const express = require('express');
const app = express();


//PORT DEPENDING ON ENV VARS
const port = process.env.PORT || 3000;

//CHECK IF APP IS SETUP IN PRODUCTION MODE
const isProduction = process.env.NODE_ENV === 'production';


app.use(require('./controllers'))
app.use(require('./middleware/cors'))

app.listen(port, () => {
  console.log(`starts up at port ${port}`);
});

