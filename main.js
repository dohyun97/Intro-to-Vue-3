const app = Vue.createApp({
    data(){
        return{
            cart:0,
            product: 'Socks',
            image:'./assets/images/socks_green.jpg' ,
            inventory: 8 ,
            details: ['50% cotton','30% wool', '20% polyster'],
            variants:[
                {id: 2345, color:'green', image:'./assets/images/socks_green.jpg'},
                {id:2234, color:'blue', image: './assets/images/socks_blue.jpg'} 
            ]
        }
    },
    methods: {
        addToCart(){
            this.cart+=1
        },
        updateImage(variantImage){
            this.image = variantImage 
        }
    }
})
