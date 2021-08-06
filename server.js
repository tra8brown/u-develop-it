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

//query database to test connection
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

//GET a single candidate
db.query(`SELECT * FROM candidates WHERE id  = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id =?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

//Default response for any other request (Not Found) *catchall route*
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});