function hitungBarang(quality,quantity) {
    let price;
    let discount = 0; 

        if(quality === "A") { 
            price = 4550
            if(quantity > 13 ) {
                discount = quantity * 231
            }
        }
        else if(quality === "B") { 
            price = 5330
            if(quantity > 7 ) {
                discount = (quantity * price) * 0.23
            }
        } else if(quality === "C") {
            price = 8653
        }else return console.log(`we are don't have quality ${quality}`)
    
        let amount = price * quantity 
        let discountAmount = amount - discount 

        console.log(`Total harga barang ${amount}`)
        console.log(`Potongan ${discount}`)
        console.log(`Total yang harus dibayar ${discountAmount}`)
        

       return discountAmount
}

hitungBarang("A",14)

