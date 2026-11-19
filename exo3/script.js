"use strict"; 
const Students = [
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
];

function B(note) {
    return note >= 10;
}

function A() {
    for (const s of Students) {
        const id = s[0];
        const note = s[3];
        if (B(note)) {
            console.log(id + ": ADMIS"); 
        } else {
            console.log(id + ": AJOURNÉ");
        }
    }
}