const form = document.getElementById('bookingForm');
const bookingsList = document.getElementById('bookingsList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // Send booking to backend
  await fetch('/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, date, time })
  });

  loadBookings();
});

async function loadBookings() {
  const res = await fetch('/bookings');
  const data = await res.json();

  bookingsList.innerHTML = '';
  data.forEach(b => {
    const li = document.createElement('li');
    li.textContent = `${b.name} - ${b.date} at ${b.time}`;
    bookingsList.appendChild(li);
  });
}

// Load bookings on page load
loadBookings();
