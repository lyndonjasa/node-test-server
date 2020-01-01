const express = require('express');
require('./mongoose.js');

const routes = require('./routes');

var app = express();
app.get('/', (req, res) => {
	res.send('Hello Express')
});

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server listening at port: ' + port);
});
