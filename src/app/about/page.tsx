import Link from 'next/link'
import React from 'react'

function about() {
  return (
    <div>
        About page
        <button>
            <Link href='/'>Goto Homepage</Link>
        </button>
    </div>
  )
}

export default about