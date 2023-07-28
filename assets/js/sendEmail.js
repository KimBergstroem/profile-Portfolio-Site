const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  btn.textContent = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_a5akf58';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Send Email';
      alert('Sent!');
      form.reset(); // Reset the form after successful submission
    })
    .catch((err) => {
      btn.textContent = 'Send Email';
      alert(JSON.stringify(err));
    });
});





