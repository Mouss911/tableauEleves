// Tableau des élèves
var eleves = [
    { nom: "DIATTA", prenom: "Moussa" },
    { nom: "SANTOS", prenom: "Junior" },
    { nom: "NDIAYE", prenom: "Adja" },
    { nom: "NDIAYE", prenom: "Awa" },
    { nom: "DIOP", prenom: "Tapha" },
    { nom: "SECK", prenom: "Ibrahima" },
    { nom: "DIAGNE", prenom: "Modou" }
  ];
  
  // Trier le tableau des élèves par ordre alphabétique du nom
  eleves.sort(function(a, b) {
    return a.nom.localeCompare(b.nom);
  });
  
  // Récupère l'élément <tbody> du tableau
  var corpTableau = document.getElementById("corpTableau");
  
  // Parcourt le tableau des élèves et ajoute chaque élève au tableau
  eleves.forEach(function(student) {
    var row = document.createElement("tr");
    var nomCell = document.createElement("td");
    var prenomCell = document.createElement("td");
  
    nomCell.textContent = student.nom;
    prenomCell.textContent = student.prenom;
  
    row.appendChild(nomCell);
    row.appendChild(prenomCell);
    corpTableau.appendChild(row);
  });
  
  // Affiche le nombre total d'élèves
  var totalEleves = document.getElementById("totalEleves");
  totalEleves.textContent = "Nombre total d'élèves : " + eleves.length;