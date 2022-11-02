import React from 'react'
import Image from 'next/image'
import spinner from '../public/assets/spinner.gif'

export default function Spinner() {
  return (
    <div>
        <Image
        className="w-[200px] m-auto block"
        src={spinner} alt='loading..' />
        </div>
  )
}
