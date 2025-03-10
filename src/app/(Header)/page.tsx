// import Image from "next/image";
import homeSrc from "@public/PIXNIO-3177264-3840x2152.png";
import Hero from "../components/hero";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'home',
}
export default function Home() {
  return (
    <Hero imgUrl={homeSrc} altText="这是一个南瓜" content="我是home页面" />
  );
  
}
