import { Metadata } from 'next'

import React, { Children, ReactElement } from 'react'

export const metadata: Metadata = {
    title: 'About page',
    description: 'This is the about page'
}

function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>): ReactElement {
  return (
    <main>
        <nav>About Page Nav: <Link href='/'>Home</Link></nav>
        {children}
    </main>
  )
}

export default AboutLayout