import Image from 'next/image'

const SidebarFooterLogo = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <Image src={'/logo.png'} alt="logo" width={'30'} height={'30'} />
      <h5 className=" font font-semibold  text-2xl">Postpal</h5>
    </div>
  )
}

export default SidebarFooterLogo
