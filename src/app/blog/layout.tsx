// 在dashboard页面创建一个文件夹，
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {  useState } from "react";

export default function Home({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
const pathName=usePathname()
  return (
    <div className="dashboard">
      <div className="nav">
        <Link className={pathName==="/blog/about"?"text-purle-500":""} href="/blog/about"> About</Link>
        <Link className={pathName==="/blog/setting"?"text-purle-500":""} href="/blog/setting">setting</Link>
      </div>
      <h3>Dashboard {count}</h3>
<button onClick={()=>setCount(n=>n+1)}>Increment</button>
      {children}
    </div>
  );
}
