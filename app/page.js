import Image from "next/legacy/image";
import styles from './page.module.css';
export default function page() {
  return (
    <div className={styles.homebanner}>
<div className={styles.div1}>
<h1>STOCK MARKET </h1>
<h5>Maintain Your Stock History</h5>
<p>This  website offers you to maintain your stock history. This helps user&apos;s to analysis stock performance. Provide graphs to track stocks performances. 24x7 Access of stock from anywhere at any time</p>
<button>Try Now</button>
</div>
<div className={styles.div2}>

<Image src={"/bannerImg.jpg"} alt="banner Image" layout="fill"/>
</div>
    </div>
  )
}
