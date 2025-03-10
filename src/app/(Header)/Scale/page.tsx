import React from 'react'
import Hero from '../../components/hero'
import homeSrc from "@public/PIXNIO-3184982-1920x1080.png"
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Scale',
}
export default function Page() {
  return (
<Hero imgUrl={homeSrc} altText="这是一个南瓜" content="我是Scale页面,接下来还会更新别的东西,请期待。。。。" />
  )
}
