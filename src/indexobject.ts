// // Using Intersections for Data Correlation 
// type Person = {
//     id: string,
//     name: string,
//     city: string,
//     // contact: { phone: number }
//     getContact(field: string): string
// }

// type Employee = {
//     id: string,
//     company: string,
//     dept: string,
//     // contact: { name: string }
//     getContact(field: number): number
// }

// type EmployedPerson = Person & Employee
// // let typeTest = ({} as EmployedPerson).contact



// // function correlateData(peopleData: Person[], staff: Employee[]): EmployedPerson[]{
// //     const defaults = { company: "None", dept: "None"}
// //     return peopleData.map(p => 
// //         ({...p, ...staff.find(e => e.id === p.id) || {...defaults, id: p.id}})
// //     )
// // }

// // let people: Person[] = [{ id: "bsmith", name: "Bob Smith", city: "London" },
// //                         { id: "ajones", name: "Alice Jones", city: "Paris"},
// //                         { id: "dpeters", name: "Dora Peters", city: "New York"}]

// // let employees: Employee[] = [{ id: "bsmith", company: "Acme Co", dept: "Sales" },
// //                              { id: "dpeters", company: "Acme Co", dept: "Development" }]

// // let person1: EmployedPerson = {
// //     id: "bsmith", name: "Bob Smith", city: "London",
// //     company: "Acme Co", dept: "Sales", 
// //     contact: { name: "Alice" , phone: 6512346543 }
// //    };

// // let person2: EmployedPerson = {
// //     id: "dpeters", name: "Dora Peters", city: "New York",
// //     company: "Acme Co", dept: "Development",
// //     contact: { name: "Alice" , phone: 6512346543 }
// //    };


// let person: EmployedPerson = {
//     id: "bsmith", name: "Bob Smith", city: "London",
//     company: "Acme Co", dept: "Sales",
//     getContact(field: string | number): any {
//     return typeof field === "string" ? "Alice" : 6512346543;
//  }
// }


// let typeTest = person.getContact;

// let stringParamTypeTest = person.getContact("Alice");
// let numberParamTypeTest = person.getContact(123);

// console.log(`Contact: ${person.getContact("Alice")}`);
// console.log(`Contact: ${person.getContact(12)}`);


// // let dataItems: EmployedPerson[] = correlateData(people, employees)

// // function writePerson(per: Person): void {
// //     console.log(`Person: ${per.id}, ${per.name}, ${per.city}`)
// // }

// // function writeEmployee(emp: Employee): void {
// //     console.log(`Employee: ${emp.id}, ${emp.company}, ${emp.dept}`)
// // }

// // dataItems.forEach(item => {
// //     writePerson(item)
// //     writeEmployee(item)
// // })