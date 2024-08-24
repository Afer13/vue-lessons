const { createApp,ref } = Vue;

var element = {
    template:`
        <p>Element 1 - {{ name }}</p>
        <button v-on:click="changeName">Change Name</button>
    `,
    data(){
        const name=ref('Afer');
        return {
            name
        }
    },
    methods:{
        changeName:function(){
            this.name="Izzet";
        }
    }

}

var one = createApp({
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    components:{
        "element":element
    }
});

one.mount('#app-one');