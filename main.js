
console.log("KodiCode JavaScript is working!");

const PUBLIC_KEY = 'k5ENmnO6T-dDYe9gN';
const SERVICE_ID = 'service_is4gpwp';
const TEMPLATE_ID = 'template_aqvoo8r';

// Initialize EmailJS
emailjs.init({
  publicKey: PUBLIC_KEY
});

// Get form elements
const form = document.getElementById('subscribe-form');
const button = document.getElementById('subscribe-button');
const message = document.getElementById('form-message');

// Handle form submission
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();

  button.disabled = true;
  button.textContent = 'SENDING...';
  message.textContent = '';

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        subscriber_email: email
      }
    );

    message.textContent = 'Welcome to KodiCode! 💚';
    message.style.color = '#2563eb';

    form.reset();

  } catch (error) {
    console.error(error);

    message.textContent = 'Something went wrong. Try again!';
    message.style.color = '#e11d48';

  } finally {
    button.disabled = false;
    button.textContent = 'COUNT ME IN →';
  }
});
