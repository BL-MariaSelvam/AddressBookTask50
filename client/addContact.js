const form = document.getElementById("contactForm");
const cancelBtn = document.getElementById("cancelBtn");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const cityInput = document.getElementById("city");

const urlParams = new URLSearchParams(window.location.search);
const contactId = urlParams.get("id");

cancelBtn.onclick = () => window.location.href = "index.html";

// ---------- LOAD DATA IF EDIT ----------
if (contactId) {
  getContacts().then(contacts => {
    const contact = contacts.find(c => c.id == contactId);
    if (contact) {
      nameInput.value = contact.name;
      phoneInput.value = contact.phone;
      cityInput.value = contact.city;
    }
  });
}

// ---------- SAVE / UPDATE ----------
form.onsubmit = e => {
  e.preventDefault();

  const contact = {
    name: nameInput.value.trim(),
    phone: phoneInput.value.trim(),
    city: cityInput.value.trim()
  };

  if (contactId) {
    updateContact(contactId, contact)
      .then(() => {
        alert("Contact Updated");
        window.location.href = "index.html";
      });
  } else {
    addContact(contact)
      .then(() => {
        alert("Contact Added");
        window.location.href = "index.html";
      });
  }
};
