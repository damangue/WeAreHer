import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/NavBar'

export default function Home() {
  return (
    <div>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        
        <h1 className={styles.title}>
          <span>Our mission</span>We empower hard working women.
        </h1>
      </main>
    </div>
    <div className={styles.content}>
      <div className={styles.paragraph}>
      <h1 className={styles.title}>
      The agriculture sector is underperforming in many developing countries and one reason is that women do not have equal access to the resources and opportunities they need to be more productive. 
      </h1>
      </div>
    </div>
    <div className={styles.top}>
      <h1>Top Products</h1><br/><br/>
      <div className={styles.card} style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url("/prod1.jpg")`}}>
        <h2>Product 1</h2>
        <p>
          Lorem What What
        </p>
      </div>
      <div className={styles.card} style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url("/products/Beans.jpeg")`}}>
        <h2>Product 2</h2>
        <p>
          Lorem What What
        </p>
      </div>
      <div className={styles.card} style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url("/products/Cumin.jpeg")`}}>
        <h2>Product 3</h2>
        <p>
          Lorem What What
        </p>
      </div>
    </div>
    </div>
  )
}
