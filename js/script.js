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
            ],
            currentActiveImage: 0,
        },
        methods: {
            onPrevClick() {
                let newIndex = this.currentActiveImage - 1;

                if(newIndex < 0) {
                    newIndex = this.imagesList.length -1;
                }

                this.currentActiveImage = newIndex
            },
            onNextClick() {
                let newIndex = this.currentActiveImage + 1;

                if(newIndex > this.imagesList.length -1) {
                    newIndex = 0;
                }

                this.currentActiveImage = newIndex
            }
        },
        mounted() {
            /* setInterval(() => {
                this.onNextClick()
            }, 3000); */
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