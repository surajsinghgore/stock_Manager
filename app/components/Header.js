import Image from "next/legacy/image";
import Link from "next/link";

export default function Header() {
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
        <button>Sign up</button>
      
      </div>
    </header>
  );
}
