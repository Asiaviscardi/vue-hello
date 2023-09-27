const{createApp} = Vue;

createApp({

    data(){
        return{
            saluto: 'Hello Vue!',
            immagine: 'img-vue.jpg',
            link: 'https://vuejs.org/',
            testo:'Visita il sito di Vue.js!'
        }
    }

}).mount('#app')