import Link from "next/link";
export default function services(){
    return (
        <>
        <h1>Welcome to services!</h1>
        <Link href="/services/web">web</Link>
        <Link href="/services/app">app</Link>
        </>
    );
}