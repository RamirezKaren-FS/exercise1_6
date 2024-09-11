import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <div >
      <nav className="navBar">
        <Link href="/">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
        HomePage
        </Link>
        <br></br>
        <Link href="/postOne">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Post One
        </Link>
        <br></br>
        <Link href="/postTwo">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />Post Two
        </Link>
        <br></br>
        <Link href="/postThree">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Post Three
          </Link> 
      </nav>
    </div>
  );
}
