
var myArray = 
[
    {
        name: 'Miller',
        fistname: 'Sébastien',
        age: '23',
        kind: 'm',
        profession: 'Footballeur',
        mother : 'Cathy',
        father : 'Williams',
        brothers : 'Pharell', 'Kaïs', 'Khalil',
        sisters : 'Sirine', 'Shaylissa',
        profilPicture: url('../img/sebastien.jpg')
    },
    {
         name: 'Miller',
        fistname: 'Cathy',
        age: '45',
        kind: 'f',
        profession: 'Mere au foyer',
        mother : 'Ginette',
        father : 'Robert',
        brothers : 'Louis', 'Jean',
        sisters : 'Catherine',
        profilPicture: url('../img/cathy.jpg')
    },
      {
         name: 'Miller',
        fistname: 'Pharell',
        age: '17', 
        kind: 'm',
        profession: 'Etudiant',
        mother : 'Ginette',
        father : 'Robert',
        brothers : 'Louis', 'Jean',
        sisters : 'Catherine',
        profilPicture: url('../img/cathy.jpg')
    },


];


function Person(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture) {

    this.name = name;
    
    this.firstname = firstname;

    this.age = age;

    this.kind = kind;

    this.profession = profession;

    this.mother = mother;

    this.father = father ;
    
    this.brothers = brothers ; 
    
    this.sisters = sisters ; 
    
    this.profilPicture = ProfilPicture ; 