import { useState } from "react"

function MyApp(props){
    let [num , setNum] = useState(10)
    return(

      <>
      <h1>Hello {props.title} </h1>
      <h1>{num}</h1>
      </>
    )
}
export default MyApp