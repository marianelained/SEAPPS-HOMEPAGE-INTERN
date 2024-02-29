import { Button } from "../components/Button";
import { useState } from "react";

export function Homepage() {
    
    const [counter, setCounter] = useState(0)

 

    return(

        <>

            <p>{counter}</p>

            <Button onClick ={() => setCounter( counter + 1 )} buttonName={"Sample button"}/>

        </>
    )
}