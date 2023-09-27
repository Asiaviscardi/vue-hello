const{createApp} = Vue;

createApp({
    data(){
        return{
            saluto: 'Hello Vue!'
        }
    }
}).mount('#app')