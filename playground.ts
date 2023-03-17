export default function play() {
    
    console.log("Hello World")

    const name: string = 'Filip'
    const age: number = 30

    const person = {
        name: "John",
        age: 43
    }

    function logPersonInfo( personName: string, personAge: number){
        const info = "Name: " + personName + ", age: " + personAge
        
        console.log(info)
        return info
    }
    function logPersonInfo2(person: {name: string, age: number}){
        const info = "Name: " + person.name + ", age: " + person.age
        
        console.log(info)
        return info
    }



    logPersonInfo(name, age)
    logPersonInfo2(person)

}