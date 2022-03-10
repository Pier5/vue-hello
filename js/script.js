// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, 
// utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un 
// data.

const settings = {
    el : '#app',
    data: {
        name: '',
        surname: '',
        saluto: '',
        srcImg: '',
    },
    methods: {
        saluta : function() {
            this.saluto = `Benvenuto ${this.name} ${this.surname}!!`;
        }
        
    }
}
const app = new Vue(settings);
