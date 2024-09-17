import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Karen's Post </h1>
        <div className={styles.ctas}>
        <ol>
        <li>
          NEW POST  
          </li>
          <Link href='/newPost'className={styles.secondary} >Read the Post</Link>
          <li>
          Taking a Breath... How relaxing and stepping away helped me problem solve.  
          </li>
          <Link href='/postOne'className={styles.secondary} >Read the Post</Link>

          <li>Making Your Own Packages with NPM </li>
          <Link href='/postOne'className={styles.secondary} >Read the Post</Link>
          <li> Getting the Most Out of Your Resources While Beig a Student  </li>
          <Link href='/postOne'className={styles.secondary} >Read the Post</Link>
        </ol>
        </div>
      </main>
      <footer className={styles.footer}>
        <h4>Created and Modified by Karen J Ramirez</h4>
        <a
        href="https://github.com/RamirezKaren-FS/exercise1_6"
        target="_blank"
        rel="noopener noreferrer"
        >
        <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
        />
        Go to Sites GitHub repo →
        </a>
    </footer>
    </div>
  );
}
