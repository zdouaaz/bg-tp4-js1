"use strict"; 
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

const etudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
};

const etudiantsObjets = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];
function f1() {
    for (const e of etudiants) {
        console.log(e); 
    }
}

function f2() {
    console.log(etudiant);
}

function f3() {
    for (let i = 0; i < etudiantsObjets.length; i++) {
        const e = etudiantsObjets[i];
        console.log(e.nom + "-" + e.prenom + "-" + e.age);
    }
}