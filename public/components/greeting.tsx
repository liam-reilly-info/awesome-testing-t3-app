import React from "react"
import { 
    type FC
} from "react"

type Props = {
    name: string
}

const Greeting: FC<Props> = ({ name }) => {

    let greeting = `Hello ${ name }!`;

    if (name.length === 0)
        greeting = "I'm sorry I didn't catch your name?"

    return <h1>{ greeting }</h1>
}
export default Greeting