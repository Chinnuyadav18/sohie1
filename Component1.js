import{useState,createContext,useContext}from"react";
const userContext=createContext();
function Component1(){
    const[user,setUser]=useState("swamy");
    return(
        <userContext.Provider value={user}>
            <h1>{'Hello ${user}!'}</h1>
            <Component2/>
        </userContext.Provider>
    );
}
function Component2(){
    return(
        <>
        <h1>Component2</h1>
        <Component3/>
        </>
    );
}
function Component3(){
    return(
        <>
        <h1>Component3</h1>
        <Component4/>
        </>
    );
}
function Component4(){
    return(
        <>
        <h1>Component4</h1>
        <Component5/>
        </>
    );
}
function Component5(){
    const user=useContext(userContext);
    return(
        <>
        <h1>Component5</h1>
        <h2>{'Hello ${user} again!'}</h2>
        </>
    );
}
export default Component1;