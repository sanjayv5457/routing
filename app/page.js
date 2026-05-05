import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <h1>Welcome to Next.js!</h1>
    <Link href="/about">Go to About Page</Link> 
    <Link href="/services">Go to Services Page</Link> 
    </>
  );
}
