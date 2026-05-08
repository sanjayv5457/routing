import { resolve } from "styled-jsx/css";

export default async function Watches(){
    await new Promise((resolve) => setTimeout(resolve,5000));
     return <div>10 Watches</div>;
}