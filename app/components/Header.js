'use client'
import Image from "next/legacy/image";
import Link from "next/link";
import { useSession,signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Header() {
const {data} = useSession();
const [names,setNames]=useState(undefined)

useEffect(()=>{

if((data!==undefined)&&(data!=null)){
setNames(data.user.name)

}
},[data])

const logoutUser=()=>{


signOut({redirect:false})
setNames(undefined)
}
  return (
    <header>
      <div className="logo">
      <Image src={"/logo.png"} alt="logo set" layout='fill'/>
      </div>
      <div className="brandName">
      <h1><span className="bx1">Sto</span><span className="bx2">ck M</span><span className="bx3">ana</span><span className="bx4">ger</span></h1>
      
      </div>

      <div className="links"> 
        <li><Link href={"/"} className="activeLinkHome">Home</Link></li>
        <li><Link href={"/"}>About</Link></li>
        <li><Link href={"/"}>Contact</Link></li>
        <li><Link href={"/"}>Services</Link></li>
      </div>
      <div className="btn">
      {(names!==undefined)?   <button onClick={()=>logoutUser()}>Logout</button>: <Link href={"/signup"}>  <button>Sign up</button></Link>}
     
      
      </div>
    </header>
  );
}
