
'use client'
import Image from 'next/legacy/image';
import styles from './page.module.css';
import { BsGoogle } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Page() {
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
         <Image src={"/login.png"} alt="logo login" layout='fill' priority/>

    </div>
<h4>Login Using third-party service</h4>  
<button className={styles.fbBtn}>
<BsGoogle className={styles.iconsInner} />
Login In using google
</button>  
<button className={styles.githubBtb}>
<AiFillGithub className={styles.iconsInner} />
Login In using github</button>  
    </div>


    <div className={styles.div2}>
    <h3>Login to your account</h3>
    <h5>Don&apos;t have account ?<span><Link href={"/signup"}>Sign up !</Link></span> </h5>
   
    
    <form>
    <input type="email" name="email" id="email" placeholder='Email address' />
    <input type="password" name="password" id="password" placeholder='Password ' />
    <button>Login with Email</button>
    </form>

     </div>


    </div>
    </div>
  )
}
