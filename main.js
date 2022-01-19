var app = new Vue ({
    el: '#App1',
    data: {
        product: "Socks",
        image: './assets/vmSocks-green-onWhite.png',
        inventory: 5,
        details: [
            "80% Cotton", 
            "20% Polyester", 
            "Gender neutral"
        ],
        variants: [
            {
                variantId: 1001,
                variantColour: "green",
                variantImage: "./assets/vmSocks-green-onWhite.png"
            },
            {
                variantId: 1002,
                variantColour: "blue",
                variantImage: "./assets/vmSocks-blue-onWhite.png"
            }
        ],
        cart: 0,
    },
    methods: {
            addToCart(){
                this.cart += 1
            },
            removeFromCart(){
                this.cart -= 1
            },
            updateProductImage(variantImage){
                this.image = variantImage
            }
        }
});

var part3 = new Vue({
    el: "#Part3",
    data: {
        title: "Vue js Course Part Three",
        IsItTrue: false,
        cars: [
            "Audi",
            "BMW",
            "Tesla"
        ],
        student: {
            name: "John",
            age: 22,
            dept: "CSE",
        },
    },
    methods: {
        greeting(){
            return "hello Rakib";
        },
        titleFunction(){
            return this.title;
        },
    }
});