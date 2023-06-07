
'use client'

import Image from 'next/legacy/image';
import styles from '../login/page.module.css';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

import { BsGoogle } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import { useEffect } from "react";


import {  signIn } from "next-auth/react"

export default async function Page() {
  const { push } = useRouter();
const {data} = useSession();

useEffect(()=>{

if(data!==null){
 push('/');
}
})
  return (
  
    <div className={styles.login}>
    <div className={styles.loginContainer}>
    <div className={styles.div1}>
    <div className={styles.logo}>
         <Image src={"/signup.png"} alt="logo signup" layout='fill' priority/>

    </div>
<h4>Signup Quickly using third-party service</h4>  
<button className={styles.fbBtn} onClick={() => signIn('google')}>
<BsGoogle className={styles.iconsInner} />
Login In using google
</button>  
<button className={styles.githubBtb} onClick={() => signIn('github')}>
<AiFillGithub className={styles.iconsInner} />
Login In using github</button>  
    </div>


    <div className={styles.div2}>
    <h3>Sign up your account</h3>
    <h5>already have account ?<span><Link href={"/login"}>Login up !</Link></span> </h5>
   
    
    <form>
    <input type="email" name="email" id="email" placeholder='Email address' />
    <input type="text" name="name" id="name" placeholder='Full name' />
    <input type="password" name="password" id="password" placeholder='Password' />
    <button >Sign up with Email</button>
    </form>

     </div>


    </div>
    </div>
  )
}
