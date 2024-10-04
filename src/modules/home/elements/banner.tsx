import { Button } from '@nextui-org/button'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="bg-[#f7f5ff] h-[100vh] ">
      <Image
        src={'/Error.png'}
        alt=""
        width={300}
        height={300}
        className="absolute hidden  xl:block  -left-24 md:-left-0"
      />

      <Image
        src={'/Empty.png'}
        alt=""
        width={300}
        height={300}
        className="absolute hidden  xl:block   -right-24 md:-right-0"
      />

      <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
        <div className=" w-full flex justify-between">
          <Image
            src={'/document.png'}
            alt=""
            width={500}
            height={500}
            className="hidden xl:block"
          />

          <Image
            src={'/reading.png'}
            alt=""
            width={500}
            height={500}
            className="hidden xl:block"
          />
        </div>

        <div className="absolute top-1/4 lg:top-5">
          <h1 className="font-clashDisplay uppercase font-bold text-cyber-ink  text-[2.75rem] md:text-[7xl] lg:text-[4rem] xl:text-[5.7rem] max-w-4xl mx-auto text-center z-[10]">
            AI-Powered Newsletters Engage Smarter, Grow
            <span className="text-[#f091dd] mx-2">Faster</span>
          </h1>
          <br />
          <h3 className="text-3xl text-center">By creator, for creators</h3>
          <br />
          <div className="flex w-full justify-center">
            <Button color="primary" className="text-xl p8">
              Get Started
            </Button>
          </div>
          <br />
          <h5 className="text-center text-lg ">Start a 30 day free trial</h5>
        </div>
      </div>
    </div>
  )
}

export default Banner
