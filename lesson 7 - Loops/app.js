const {createApp,ref}=Vue;

createApp({
    setup() {
        let arr=[
            {name:"Afer",surname:"Rəhimov",age:21,job:"BackEnd Developer"},
            {name:"İzzət",surname:"Rəhimov",age:23,job:"BackEnd Developer"},
            {name:"Aqil",surname:"Kəlbiyev",age:19,job:"FrontEnd Developer"},
        ];
        const data=ref(arr);

        return{
            data
        }
    }
}).mount('#app');