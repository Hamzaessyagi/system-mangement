// Récupérer tous les utilisateurs
fetch('http://localhost:8080/api/usersService')
  .then(response => response.json())
  .then(users => console.log("Tous les utilisateurs :", users))
  .catch(err => console.error(err));

// Ajouter un utilisateur
const newUser = {
  fullName: "Hamza Syagi",
  email: "hamza@example.com"
};

fetch('http://localhost:8080/api/usersService', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newUser)
})
console.log("Données envoyées :", newUser)

  .then(response => response.json())
  .then(user => console.log("Utilisateur ajouté :", user))
  .catch(err => console.error(err));
