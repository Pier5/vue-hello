// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, 
// utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un 
// data.

const app = new Vue ({
    el : '#app',
    data: {
        name: '',
        surname: '',
        saluto: '',
        classList: 'gray',
        srcImg: 'https://picsum.photos/200/200',
        altImg: 'Immagine random',
    },
    methods: {
        saluta : function() {
            this.saluto = `Benvenuto ${this.name} ${this.surname}!!`;
        } 
    }
});

