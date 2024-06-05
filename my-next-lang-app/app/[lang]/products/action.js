export async function getProductList(){
    const products = [
        {
            name: "Domates",
            price: 100,
            imageUrl: "https://images.migrosone.com/sanalmarket/product/28080000/domates-kg-c7462d-1650x1650.jpg"
        },
        {
            name: "Salatalık",
            price: 150,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIj-DabjP1U5EpegfAgWsNu5angAlkjzPvw&s"
        },
        {
            name: "Bilgisayar",
            price: 15000,
            imageUrl: "https://cdn03.ciceksepeti.com/cicek/kcm77243105-1/L/intel-i5-4n-8gb-120gb-ssd-19-monitorlu-masaustu-bilgisayar-kcm77243105-1-b8f803f4f4e64c929b23a7d1c5ee0988.jpg"
        }
    ]

    return products;
}