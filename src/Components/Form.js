import React, { useState } from "react";

const Form=()=>{
   
    const arr=[{name:"Name",type:"text",label:"Name"},
               {name:"Email",type:"email",label:"Email"},
               {name:"Password",type:"password",label:"Password"}]
    const [result,setResult]=useState({});
    const [val,setVal]=useState({});

    function handleChange(e,key){
         setVal((val)=>({...val,[key]:e.target.value}))
        setResult((result)=>({...result,[key]:e.target.value}))
    }
    function handleSubmit(e){
       e.preventDefault();
        console.log(result)
        setVal({Name:"",Email:"",Password:""});
    }
    return(
       <form onSubmit={(e)=>{handleSubmit(e)}}>
         {
            arr.map((obj,index)=>{
                return(
                   <div>
                      <label>{obj.label}</label>
                     <input type={obj.type} placeholder={obj.name}
                     value={val[obj.name]}
                     onChange={(e)=>{handleChange(e,obj.name)}}></input>
                   </div>
                )
            })
         }
         <button type="submit">Submit</button>
       </form>
    )
}
export default Form;