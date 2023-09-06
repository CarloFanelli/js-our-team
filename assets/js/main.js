/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
 */

/* 
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. 
*/

const ourTeam = [
    {
        name : 'Wayne Barnett',
        position : 'Founder & CEO',
        profileImg : "./assets/img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name : 'Angela Caroll',
        position : 'Chief Editor',
        profileImg : "./assets/img/angela-caroll-chief-editor.jpg"
    },
    {
        name : 'Walter Gordon',
        position : 'Office Manager',
        profileImg : "./assets/img/walter-gordon-office-manager.jpg"
    },
    {
        name : 'Angela Lopez',
        position : 'Social Media Manager',
        profileImg : "./assets/img/angela-lopez-social-media-manager.jpg"
    },
    {
        name : 'Scott Estrada',
        position : 'Developer',
        profileImg : "./assets/img/scott-estrada-developer.jpg"
    },
    {
        name : 'Barbara Ramos',
        position : 'Graphic Designer',
        profileImg : "./assets/img/barbara-ramos-graphic-designer.jpg"
    },

]

for (const key in ourTeam) {

    //const element = ourTeam[key];

    console.log(key);

        
    
}

for (let i = 0; i < ourTeam.length; i++) {
    
    const teamComponent = ourTeam[i];

    //console.log(teamComponent);

    for (const key in teamComponent) {

        console.log(key,teamComponent[key]);
    }
    
}