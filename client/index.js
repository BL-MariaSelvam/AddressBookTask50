document.addEventListener("DOMContentLoaded", () => {
  const contactList = document.getElementById("contactList");
  const addBtn = document.getElementById("addBtn");

  addBtn.addEventListener("click", () => {
    window.location.href = "addContact.html";
  });

  function renderContacts() {
    getContacts()
      .then(contacts => {
        contactList.innerHTML = "";

        if (contacts.length === 0) {
          contactList.innerHTML = "<p>No contacts found</p>";
          return;
        }

        contacts.forEach(contact => {
          const row = document.createElement("div");
          row.className = "row";
          row.innerHTML = `
            <span>${contact.name}</span>
            <span>${contact.phone}</span>
            <span>${contact.city}</span>
            <span>
              <button onclick="removeContact(${contact.id})">🗑</button>
            </span>
          `;
          contactList.appendChild(row);
        });
      })
      .catch(err => console.error(err));
  }

  window.removeContact = function(id) {
    if (confirm("Delete this contact?")) {
      deleteContact(id).then(renderContacts);
    }
  };

  renderContacts();
});
