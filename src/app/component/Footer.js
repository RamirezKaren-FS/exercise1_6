import Image from "next/image";
import styles from "../page.module.css";

export default function Footer() {
    return (
    <footer className={styles.footer2}>
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
    );
}