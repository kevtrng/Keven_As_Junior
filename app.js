const express = require('express');
const router = require('./routes/router');

const PORT = process.env.PORT || 8000;

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use('/', router);


app.listen(PORT, () => {
	console.log(`Application started, see: http://localhost:${PORT}/`);
}); 
