
import { useState } from "react";

function InputElementComponent()
{
let [name,setName]=useState("");
let [tempname,setTempname]=useState("");

  function inputHandler(myevent)
{
//console.log("Inside the handler",myevent)
console.log(myevent.target)
console.log(myevent.target.value)

setTempname(myevent.target.value)


}


return(

<>
<label> Name:
<input type="text"  value={name}></input>
</label>
<button onClick={()=>{

setTempname(tempname);

}} >GetData</button>


<div id="showdata">

    <p>Ur Name is:{name}</p>

     <p>Ur Name is acter click:{tempname}</p>
</div>
</>

    )

}

export default InputElementComponent;