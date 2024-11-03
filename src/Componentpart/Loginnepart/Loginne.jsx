import { useState } from "react"


const Loginne = () => {

// ========================================= custom usestate part started ==========================
let  [Email , setEmail] = useState('')
let [emailError , setEmailror] = useState('')
const [password , setPassword] = useState('')
const [ passwordError , setpasswordError ] = useState('')

//   ====================================== All funtion part started ================================


let hendelEmail = (aloMia)=>{
     setEmail(aloMia.target.value)
     
}


let hendelSubmit = (e)=>{
  e.preventDefault()
  if(Email == ''){ 
  setEmailror('hey man')
  if(password == '' ){
    setpasswordError('please enter your password')
  }
}

}
console.log(password)

  return (
    <div  className="  w-full h-screen bg-black text-yellow-50 flex justify-center items-center ">
    
     <div className=" w-[500px] p-[30px] bg-green-400 rounded-[3px]  " >
       
     <h1 className=" text-center items-center font-bold text-yellow-700 text-[34px] " >Login </h1>
    <form onSubmit={hendelSubmit} >
        {/*============================ Input part started ==================================== */}
           <h1 className=" text-black font-bold mb-[5px]  "> Email  </h1>
        <input 
        onChange={(tera)=>hendelEmail(tera)} 
        type="text"  
        className="  mb-[25px] ml-20px w-[400px] text-black h-[30px]  rounded-[3px] outline-none " placeholder="Email Name Wite " />
        <p className="  text-black bg-red-500 font-bold flex justify-start text-center " >{emailError}</p>

         {/* ======================password part started ======================================= */}

        <h1 className=" text-black font-bold mb-[5px] "> Password  </h1>
        <input 
        onChange={(e)=>setPassword(e.target.value)}
        type="text"  
        className="  ml-20px w-[400px] text-black h-[30px]  rounded-[3px] outline-none " placeholder="Password Name Wite " />
        
        <p className="  text-black bg-red-500 font-bold flex justify-start text-center " >{passwordError}</p>
        <div className="batton  flex justify-end mr-[39px]  mt-[20px] ">
        <button  
        type="submit" 
        className="items-center flex justify-center  text-red-700 font-bold w-[70px] h-[30px]  bg-yellow-400 active:scale-0">
            Login 
        </button>
        </div>
    </form>

      <div className="loginid buttone flex justify-end mr-[42px]  mt-[20px]  ">
      <h1 className=" mr-[80px] text-blue-700  "> Have you not any account ?  <span className="text-gray-700" >Rester</span> </h1>
        
      </div>

     </div>

    </div>
  )
}

export default Loginne