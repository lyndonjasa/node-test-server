const express = require('express');
require('./mongoose.js');

const routes = require('./routes');

var app = express();
app.get('/', (req, res) => {
	res.send('Hello Express')
});

app.use(express.json());
app.use(routes);

app.listen(3000)
