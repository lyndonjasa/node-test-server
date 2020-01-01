const express = require('express');
require('./mongoose.js');

const routes = require('./routes');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello Express')
});
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server listening at port: ' + port);
});
