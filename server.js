const express = require('express');
const app = express();
const bookingRoutes = require('./src/routes/bookingRoutes');

app.use(express.json());
app.use('/bookings', bookingRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
