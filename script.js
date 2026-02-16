(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const topicInput = document.getElementById("topic");
  const isbnInput = document.getElementById("isbn");
  const messageInput = document.getElementById("message");
  const errorEl = document.getElementById("formError");
  const successEl = document.getElementById("formSuccess");
  const previewEl = document.getElementById("preview");

  function isValidEmail(value) {
    // Simple email validation for class projects
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorEl.textContent = "";
    successEl.hidden = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const topic = topicInput.value;
    const isbn = isbnInput.value.trim();
    const message = messageInput.value.trim();

    if (!name) {
      errorEl.textContent = "Please enter your name.";
      nameInput.focus();
      return;
    }

    if (!email || !isValidEmail(email)) {
      errorEl.textContent = "Please enter a valid email address.";
      emailInput.focus();
      return;
    }

    if (!message) {
      errorEl.textContent = "Please enter a message.";
      messageInput.focus();
      return;
    }

    const safeIsbn = isbn ? ` ISBN: ${isbn}.` : "";
    previewEl.textContent =
      `Preview: ${name} (${email}) asked about ${topic}.${safeIsbn} Message: ${message}`;

    successEl.hidden = false;
    form.reset();
    nameInput.focus();
  });
})();
