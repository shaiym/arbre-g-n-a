
var myArray = 
[
    {
        name: 'Miller',
        fistname; 'Sébastien',
        age; '23',
        kind; 'm',
        profession; 'Footballeur',
        mother; 'Cathy',
        father; 'Williams',
        brothers; 'Pharell', 'Kaïs', 'Khalil',
        sisters; 'Sirine', 'Shaylissa',
        profilPicture; url ('../img/sebastien.jpg')
  
    
         name; 'Miller',
        fistname; 'Cathy',
        age; '45',
        kind; 'f',
        profession; 'Mere au foyer',
        mother; 'Ginette',
        father; 'Robert',
        enfants; 'Sirine', 'Shaylissa','Pharell', 'Kaïs', 'Khalil',
        profilPicture; url('../img/cathy.jpg')
   
      
        name; 'Miller',
        fistname; 'Pharell',
        age;'17', 
        kind; 'm',
        profession; 'Etudiant',
        mother ; 'Cathy',
        father ; 'Williams',
        brothers ; 'Sebastien', 'Kaïs', 'Khalil',
        sisters ; 'Sirine', 'Shaylissa',
        profilPicture ; url('../img/cathy.jpg')
    
        
        name; 'Miller',
        fistname; 'Ginette',
        age; '79',
        kind; 'f',
        profession; 'Mere au foyer',
        enfants; Cathy, 'Williams',
        profilPicture; url('../img/cathy.jpg')
   
      
},


];


function Person(name, firstname, age, kind, profession, mother, father, brothers, sisters, enfants, profilPicture) 
{

    this.name = name;
    
    this.firstname = firstname;

    this.age = age;

    this.kind = kind;

    this.profession = profession;

    this.mother = mother;

    this.father = father ;
    
    this.brothers = brothers ; 
    
    this.sisters = sisters ;     
    
    this.enfants = enfants ; 
    
    this.profilPicture = ProfilPicture ;
}