const form = document.getElementById("contactForm");
const cancelBtn = document.getElementById("cancelBtn");

cancelBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

form.addEventListener("submit", event => {
  event.preventDefault();

  const contact = {
    name: document.getElementById("name").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    city: document.getElementById("city").value.trim()
  };

  addContact(contact)
    .then(() => {
      alert("Contact Added Successfully");
      window.location.href = "index.html";
    })
    .catch(err => alert(err));
});
