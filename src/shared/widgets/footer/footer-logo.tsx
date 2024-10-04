import Image from 'next/image'
import React from 'react'

const FooterLogo = () => {
  return (
    <div className="relative flex items-center cursor-pointer">
      <Image src={'/logo-dark.png'} alt="logo" width={'40'} height={'40'} />
      <h5 className=" font font-semibold  text-2xl">Postpal</h5>
    </div>
  )
}

export default FooterLogo
