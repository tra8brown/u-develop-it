const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

//express middleware
app.use(express.urlencoded({ extrended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection({
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'Biihbitoodni2017!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

//Default response for any other request (Not Found) *catchall route*
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});