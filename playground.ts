

export default function play() {


    const random = Math.random() > 0.5 ? "Hello String" : [1,2]

    // this is narrowing, is asking which type of var type is a var before changing/using it
    if (typeof random == "string") {
        const upper = random.toUpperCase()
    } else {
        console.log(random)
    }

    

}