const{createApp} = Vue;

createApp({
    data(){
        return{
            saluto: 'Hello Vue!',
            immagine: 'img-vue.jpg'
        }
    }
}).mount('#app')