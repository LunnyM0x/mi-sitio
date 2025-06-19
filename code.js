let hairIndex = 0;
let dressIndex = 0;
let shoeIndex = 0;

const hairOptions = ['hairfront1', 'hairfront2', 'hairfront3', 'hairfront4'];
const dressOptions = ['dress1', 'dress2', 'dress3', 'dress4'];
const shoeOptions = ['shoe1', 'shoe2', 'shoe3', 'shoe4'];

function nexthair() {
    hairIndex = (hairIndex + 1) % hairOptions.length;
    updateHair();
}

function prevhair() {
    hairIndex = (hairIndex - 1 + hairOptions.length) % hairOptions.length;
    updateHair();
}

function nextdress() {
    dressIndex = (dressIndex + 1) % dressOptions.length;
    updateDress();
}

function prevdress() {
    dressIndex = (dressIndex - 1 + dressOptions.length) % dressOptions.length;
    updateDress();
}

function nextshoe() {
    shoeIndex = (shoeIndex + 1) % shoeOptions.length;
    updateShoes();
}

function prevshoe() {
    shoeIndex = (shoeIndex - 1 + shoeOptions.length) % shoeOptions.length;
    updateShoes();
}

function updateHair() {
    const hairfront = document.getElementById("hairfront");
    hairfront.className = hairOptions[hairIndex];
}

function updateDress() {
    const clothes = document.getElementById("clothes");
    clothes.className = dressOptions[dressIndex];
}

function updateShoes() {
    const shoes = document.getElementById("shoes");
    shoes.className = shoeOptions[shoeIndex];
}