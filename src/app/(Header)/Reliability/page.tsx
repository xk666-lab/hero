import React from 'react'
import Hero from '../../components/hero'
import homeSrc from "@public/PIXNIO-3184847-1920x1080.png"

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Reliability',
}
export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altText="这是Reliability" content="我是Reliability页面,接下来的内容会慢慢更新，请期待。。。" />
  )
}
