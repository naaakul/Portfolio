import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex justify-center'>
        <div className='h-screen w-[59%] flex flex-col gap-4 mt-8'>
            <div className='h-44 flex gap-4'>
                <div className='box flex-grow flex items-center gap-4 px-4 rounded-3xl'>
                    <div className="w-36 h-36 rounded-full overflow-hidden relative">
                        <Image src='/me.png' alt="photo" layout="fill" objectFit="cover"></Image>
                    </div>
                    <div>
                        <h1 className='text-4xl'>Nakul Chouksey</h1>
                        <h5 className='text-sm font-extralight text-zinc-700'>Software Developer</h5>
                    </div>
                </div>
                <div className='box w-44 rounded-3xl'>
                    <div className='p-4 relative'>
                        <video autoPlay loop muted src="/map.mp4" className='rounded-3xl'></video>
                        <div className='absolute pl-3 pt-1 bg-[#000002] h-[2.38rem] w-[8.6rem] bottom-[1.2rem] left-[1.2rem] rounded-b-3xl rounded-t-lg'>
                            <p className='text-[0.6rem]'>BHOPAL MP</p>
                            <p className='text-[0.5rem]'>23.251018 N, 77.464507 E</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box h-44 rounded-3xl flex items-center px-4'>
                <p className='text-xl relative'><span className='text-5xl'>Hi,</span> I’m <span className='font-medium'>Nakul.</span> I build stuff with <span className='font-medium mr-4 relative'>Next.js &nbsp;&nbsp;&nbsp;<span><img src="/icon 1.png" className='h-7 border rounded-full absolute -top-1 left-[4.1rem]' alt="" /></span></span>, dabble in <span className='font-medium relative'>Web3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src="/icon 2.png" className='h-7 w-7 border rounded-full absolute -top-1 left-[3.5rem]' alt="img" /><img src="/icon 3.png" className='h-7 border rounded-full absolute -top-1 left-[5.6rem]' alt="" /></span>       and AI-ML <span></span> </span>         , and take on <span className='font-medium'>design and freelance gigs</span>           .</p>
            </div>
            <div className='box h-44 rounded-3xl'></div>
            <div className='h-44 flex gap-4'>
                <div className='box w-44 rounded-3xl'></div>
                <div className='box flex-grow rounded-3xl'></div>
                <div className='box w-44 rounded-3xl'></div>
            </div>
            <div className=''></div>
        </div>
    </div>
  )
}

export default page