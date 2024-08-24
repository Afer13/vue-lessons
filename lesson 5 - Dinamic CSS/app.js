const { createApp, ref } = Vue;
createApp({
    setup() {
        const activeStatus=ref(false);
        const extra=ref(false);
        return{
            activeStatus,extra
        }
    },
    methods: {
        
    },
    computed:{
        change:function(){
            return{
                activeStatus:this.activeStatus,
                extra:this.extra
            }
        }
    }
}).mount('#app');