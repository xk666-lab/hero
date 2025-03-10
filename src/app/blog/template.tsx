// 在dashboard页面创建一个文件夹，
"use client";
// import Link from "next/link";
import React, {  useState } from "react";

export default function Template({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);

  return (
    <div className="Template">
      
      <h3>Dashboard {count}</h3>
<button onClick={()=>setCount(n=>n+1)}>Increment</button>
      {children}
    </div>
  );
}
