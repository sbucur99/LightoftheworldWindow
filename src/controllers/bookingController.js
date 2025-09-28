const db = require('../config/db');

exports.getAllBookings = (req, res) => {
  db.query('SELECT * FROM bookings', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.addBooking = (req, res) => {
  const { name, date, time } = req.body;
  db.query('INSERT INTO bookings (name, date, time) VALUES (?, ?, ?)',
    [name, date, time],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Booking added!', id: result.insertId });
    });
};
