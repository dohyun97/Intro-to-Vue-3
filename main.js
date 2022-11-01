const app = Vue.createApp({
    data(){
        return{
            product: 'Socks',
            image:'./assets/images/socks_green.jpg' ,
            inveontory: 100 ,
            details: ['50% cotton','30% wool', '20% polyster'],
            variants:[
                {id: 2345, color:'green'},
                {id:2234, color:'blue'} 
            ]
        }
    }
})
