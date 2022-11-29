// // enum Feature { Waterproof, Insulated }

// // type Product = {
// //     name: string,
// //     price?: number,
// //     hasFeature?(Feature): boolean
// // }

// type Product = {
//     id: number,
//     name: string,
//     price?: number
// }

// type Person = {
//     id: string,
//     name: string,
//     city: string
// }

// type Employee = {
//     company: string,
//     dept: string
// }
// // type UnionType = {
// //     id: number | string,
// //     name: string
// // }

// let hat = { id: 1, name: "Hat", price: 100}
// let gloves = { id: 2, name: "Gloves", price: 75 }
// let umbrella = { id: 3, name: "Umbrella", price: 30}
// let bob = { id: "bsmith", name: "Bob", city: "London",
//             company: "Acme Co", dept: "Sales"}
        


// //let dataItems: UnionType[] = [hat, gloves, umbrella, bob]

// // let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob]

// // function isPerson(testObj: any): testObj is Person {
// //     return testObj.city !== undefined
// // }

// // dataItems.forEach(item => {
// //     if (isPerson(item)){
// //         console.log(`Person: ${item.name}: ${item.city}`)
// //     } else {
// //         console.log(`Product ${item.name}: ${item.price}`)
// //     }
// // })


// let dataItems: (Person & Employee)[] = [bob]


// dataItems.forEach(item => {
//     console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
//     console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
// })




// // let hat = { name: "Hat", price: 100 }
// // let gloves = { name: "Gloves",  price: 75 }
// // let umbrella = { name: "Umbrella", price: 30,
// //  hasFeature: (feature) => feature === Feature.Waterproof };

// //  let mirrorShade = { name: "Sunglasses", price: 54, finish: "mirrored"}
// //  let darkShades: Product = { name: "Sunglasses", price: 54, finish: "flat"}


// // // let products: { name: string, price?: number,
// // //     hasFeature?(Feature): boolean }[]
// // //     = [hat, gloves, umbrella]

// // let products: Product[] = [hat, gloves, umbrella, mirrorShade, darkShades]

// // products.forEach(prod => console.log(`${prod.name}: ${prod.price} `
// //     + `Waterproof: ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof): "false"}`))
