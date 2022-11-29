// function calculateTax(amount: number): number {
//     return amount * 1.2;
//    }
   

//    function writePrice(product: string, price: number): void {
//     console.log(`Price for ${product}: $${price.toFixed(2)}`);
//    }

//    let hat: [string, number] = ["Hat", 100];
//    let gloves: [string, number] = ["Gloves", 75];


// //    writePrice(hat[0], hat[1]);
// //    writePrice(gloves[0], gloves[1]);


// //    hat.forEach((h: string | number) => {
// //         if (typeof h === "string"){
// //             console.log(`String: ${h}`)
// //         } else {
// //             console.log(`Number: ${h.toFixed(2)}`)
// //         }
// //    })


// // let product: [string , number][] = [["Hat", 100], ["Gloves", 75]]

// // let tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...product]

// // tupleUnion.forEach((elem: [string, number] | boolean) => {
// //         if(elem instanceof Array){
// //             elem.forEach((tupleElem: string | number) => {
// //                 if(typeof tupleElem === "string"){
// //                     console.log(`String value: ${tupleElem}`)
// //                 } else {
// //                     console.log(`String value: ${tupleElem.toFixed(2)}`)
// //                 }
// //             })
// //         } else if (typeof elem === "boolean"){
// //             console.log(`Boolean Value: ${elem}`);
// //         }
// // })

// enum Product  { Hat, Gloves, Umbrella }

// let product: [Product, number][] = [[Product.Hat, 100], [Product.Gloves, 75]]

// product.forEach((prod: [Product, number]) => {
//    switch(prod[0]){
//         case Product.Hat:
//             writePrice("Hat", calculateTax(prod[1]))
//             break
//         case Product.Gloves:
//             writePrice("Gloves", calculateTax(prod[1]))
//             break
//         case Product.Umbrella:
//             writePrice("Umbrella", calculateTax(prod[1]))
//             break
//    } 
// })

// ;[Product.Hat, Product.Gloves, Product.Umbrella].forEach(val => {
//     console.log(`Number value: ${val}`)
// })


// let productValue: Product = 0
// let productName: string = Product[productValue]
// console.log(`Value: ${productValue}, Name: ${productName}`)


// enum City { London = "London", Paris = "Paris", NY = "New York"}

// console.log(`City: ${City.London}`)

// let productValue2: Product = Product.Hat
// if(typeof productValue === "number"){
//     console.log("Value is a number")
// }

// let unionValue: number | Product = Product.Hat
// if(typeof unionValue === "number"){
//     console.log("Value is a number")
// }