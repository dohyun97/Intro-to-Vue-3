const app = Vue.createApp({
    data(){
        return{
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant:0 ,
            inventory: 0 ,
            details: ['50% cotton','30% wool', '20% polyster'],
            variants:[
                {id: 2345, color:'green', image:'./assets/images/socks_green.jpg',quantity:0},
                {id:2234, color:'blue', image: './assets/images/socks_blue.jpg',quantity:50} 
            ]
        }
    },
    methods: {
        addToCart(){
            this.cart+=1
        },
        updateVariant(index){
            this.selectedVariant = index
            
        }
    },
    computed: {
        title(){
            return this.brand +' '+ this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        InStock(){
            return this.variants[this.selectedVariant].quantity
        }
    }
})
