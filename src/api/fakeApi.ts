export default {
    getProducts: async () => {
        await new Promise(resolve => setTimeout(() => { resolve("") }, 1000))
        return [
            {
                imgSrc: "https://m.media-amazon.com/images/I/61YSNhAb00L._AC_UF1000,1000_QL80_.jpg",
                price: 5,
                shortDesc: "One tenis to you play futball with your team"
            },
            {
                imgSrc: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH6P2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=0",
                price: 5,
                shortDesc: "One tenis to you play futball with your team"
            },
            {
                imgSrc: "https://60398.cdn.simplo7.net/static/60398/sku/masculino-tenis-qix-dbdois-1617305022663.jpg",
                price: 5,
                shortDesc: "One tenis to you play futball with your team"
            },
            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjyzu4E0OxQ0rFyGc2iio-B-IA25f2xFeMg&usqp=CAU",
                price: 5,
                shortDesc: "It's my cloath which i'm used every day to make my good tasksIt's my cloath which i'm used every day to make my good tasksIt's my cloath which i'm used every day to make my good tasksIt's my cloath which i'm used every day to make my good tasksIt's my cloath which i'm used every day to make my good tasksIt's my cloath which i'm used every day to make my good tasksIt's my cloath which i'm used every day to make my good tasksIt's my cloath which i'm used every day to make my good tasksIt's my cloath which i'm used every day to make my good tasks"
            }
        ]
    }
}