import { eventWrapper } from "@testing-library/user-event/dist/utils";
import{useState} from"react";
function MyForm(){
    const[name,setName]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert('This is you entered was:${name}')
    }
    return(
        <form OnSubmit={handleSubmit}>
        <label>enter your name:
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

        </label>
        <input type="Submit"/>
        </form>
    )
}
export default MyForm;