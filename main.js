;const printDom = (stringToPrint, divID) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML += `${stringToPrint}`;
};

const age = 26;

if (age >= 21){
    console.log('Come on in');
} else {
    console.log('Get out of here');
}

//let authenticated === false;



const a = 1;
const b = '1';

a === b; //false
a == b; //true

a !== b; //true
a!= b; //false

const favoriteColor = 'blue';
const favoriteAnimal = 'bear';

if (favoriteAnimal === 'bear' && favoriteColor === 'red'){
    console.log('Welcome to the club');
} else if (favoriteAnimal === 'cat' || favoriteColor === 'blue') {
    console.log('$500 to join the club');
} else {
    console.log('Go away');
}