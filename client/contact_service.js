const baseUrl = "http://localhost:3000/contacts";

// GET Contacts
function getContacts() {
  return makeServiceCall("GET", baseUrl)
    .then(response => JSON.parse(response));
}

// POST Contact
function addContact(contact) {
  return makeServiceCall("POST", baseUrl, true, contact)
    .then(response => JSON.parse(response));
}

// DELETE Contact
function deleteContact(id) {
  return makeServiceCall("DELETE", `${baseUrl}/${id}`);
}
