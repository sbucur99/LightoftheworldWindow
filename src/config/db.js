const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'lotw-db.cvewo4o6091h.us-east-2.rds.amazonaws.com', // AWS endpoint
  user: 'admin',      // your AWS DB username
  password: 'Silas0442', // your AWS DB password
  database: 'bookings',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to AWS MySQL:', err);
    return;
  }
  console.log('Connected to AWS MySQL Database');
});
