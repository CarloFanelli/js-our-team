/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
 */

/* 
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. 
*/

const ourTeam = [
    {
        name: 'Wayne Barnett',
        position: 'Founder & CEO',
        profileImg: "./assets/img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: 'Angela Caroll',
        position: 'Chief Editor',
        profileImg: "./assets/img/angela-caroll-chief-editor.jpg"
    },
    {
        name: 'Walter Gordon',
        position: 'Office Manager',
        profileImg: "./assets/img/walter-gordon-office-manager.jpg"
    },
    {
        name: 'Angela Lopez',
        position: 'Social Media Manager',
        profileImg: "./assets/img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: 'Scott Estrada',
        position: 'Developer',
        profileImg: "./assets/img/scott-estrada-developer.jpg"
    },
    {
        name: 'Barbara Ramos',
        position: 'Graphic Designer',
        profileImg: "./assets/img/barbara-ramos-graphic-designer.jpg"
    },

]

/* MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto */


for (let i = 0; i < ourTeam.length; i++) {

    const teamComponent = ourTeam[i];

    //console.log(teamComponent);

    for (const key in teamComponent) {

        console.log(key, teamComponent[key]);
    }

}

/* MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
 */

//use the same cicle for that i used before, instead of console.log i use insertAdiacentHTML

//dove inserisco =>
const teamComponentDOM = document.querySelector('.row');

for (let i = 0; i < ourTeam.length; i++) {

    const teamComponent = ourTeam[i];

    const teamComponentMarkup = `<div>
    <h4>Nome: ${teamComponent.name}</h4>
    <h3>Ruolo: ${teamComponent.position}</h3>
    <img src="${teamComponent.profileImg}" alt="">
</div>`

    teamComponentDOM.insertAdjacentHTML('beforeend', teamComponentMarkup);

    //console.log(teamComponent);

    for (const key in teamComponent) {

        console.log(key, teamComponent[key]);
    }

}