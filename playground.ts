// interface over types recommended by TS when possible!!!


// interface describes data structures in a more natural way
// describes objects( shipments, orders)
interface Person {
    name: string,
    age: number
}

// type aliases ` type data = string`
// better to describe function types
// 
// type Person ={
//     name: string,
//     age: number
// }

export default function play() {
    const name: string = 'Filip'
    const age: number = 30

    const person:Person = {
        name: "John",
        age: 43
    }
    
    function logPersonInfo( personName: string, personAge: number){
        const info = "Name: " + personName + ", age: " + personAge
        
        console.log(info)
        return info
    }
    function logPersonInfo2(person: Person){
        const info = "Name: " + person.name + ", age: " + person.age
        
        console.log(info)
        return info
    }

    logPersonInfo(name, age)
    logPersonInfo2(person)

}