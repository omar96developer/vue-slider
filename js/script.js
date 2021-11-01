Vue.config.devtools = true;

var app = new Vue(
    {
        el: '#root',
        data: {
            imagesList: [
                {
                    url: 'img/01.jpg',
                    titolo: 'Svezia',
                    descrizione: 'Lorem ipsum',
                },
                {
                    url: 'img/02.jpg',
                    titolo: 'Svizzera',
                    descrizione: 'Lorem ipsum,lorem ipsum',
                },
                {
                    url: 'img/03.jpg',
                    titolo: 'Gran Bretagna',
                    descrizione: 'Lorem ipsum',
                },
                {
                    url: 'img/04.jpg',
                    titolo: 'Germania',
                    descrizione: 'Lorem ipsum,lorem ipsum',
                },
                {
                    url: 'img/05.jpg',
                    titolo: 'Paradise',
                    descrizione: 'Lorem ipsum',
                }
            ]
        },
        methods: {

        }
    }
);

/* 


const items = [
    {
        url: 'img/01.jpg',
        titolo: 'Svezia',
        descrizione: 'Lorem ipsum',
    },
    {
        url: 'img/02.jpg',
        titolo: 'Svizzera',
        descrizione: 'Lorem ipsum',
    },
    {
        url: 'img/03.jpg',
        titolo: 'Gran Bretagna',
        descrizione: 'Lorem ipsum',
    },
    {
        url: 'img/04.jpg',
        titolo: 'Germania',
        descrizione: 'Lorem ipsum',
    },
    {
        url: 'img/05.jpg',
        titolo: 'Paradise',
        descrizione: 'Lorem ipsum',
    }
]




*/