"use client";
import { use, useState } from "react";
export default function Likes(){
    // await new Promise((resolve) => setTimeout(resolve,5000));


    const [likesCount, setlikesCount] = useState(0);
    return( 
    
    <div
        onClick={ ()=>{
            setlikesCount((prev) => prev + 1)
        } }
    >
        {likesCount} Likes
    </div>

    );
}