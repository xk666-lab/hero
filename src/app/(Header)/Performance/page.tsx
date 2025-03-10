import React from 'react'
import Hero from '../../components/hero'
import homeSrc from "@public/PIXNIO-3177399-3840x2152.png"

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Performance',
}
export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altText="这是图瓜" content="这是Performance页面" />

  )
}
