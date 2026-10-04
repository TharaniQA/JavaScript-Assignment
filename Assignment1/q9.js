// Q9. Create an object product with name, price and an inner 
// object seller that has sellerName, rating and location.
//  Print the seller's rating and location using nested dot notation.

let product= {
    name: "iphone",
    price: 45000,
    seller:{
        sellerName: "PTK Seller",
        rating:4.5,
        location:"Chennai"
    }
}
console.log(product.seller.rating, product.seller.location);