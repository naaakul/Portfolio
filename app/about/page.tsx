import React from 'react'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiPaperArrow } from "react-icons/gi";


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
                <p className='text-zinc-500 text-xl relative'><span className='text-5xl text-white'>Hi,</span> I’m <span className='font-medium text-white'>Nakul.</span> I build stuff with <span className='font-medium mr-4 relative text-white'>Next.js &nbsp;&nbsp;&nbsp;<span><img src="/icon 1.png" className='h-7 border rounded-full absolute -top-1 left-[4.1rem]' alt="" /></span></span>, dabble in <span className='font-medium relative text-white'>Web3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src="/icon 2.png" className='h-7 w-7 border rounded-full absolute -top-1 left-[3.5rem]' alt="img" /><img src="/icon 3.png" className='h-7 border rounded-full absolute -top-1 left-[5.6rem]' alt="" /></span>       and AI-ML &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><img src="/icon 4.png" className='h-7 border rounded-full absolute -top-1 left-[13.7rem]' alt="" /></span> </span>         , and take on <span className='font-medium text-white'>design and freelance gigs</span><span className='relative'><span className='h-7 w-16 rounded-full absolute top-[-0.2rem] left-[0.38rem] bg-[#031EA1] flex py-2 pl-3'><img src="/arrow.png" alt="" /></span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.</p>
            </div>
            <div className='box p-4 rounded-3xl'>
                <h3 className='text-xl'>EDUCATION</h3>
                <div className='flex'>
                    <div>
                        <h4 className='text-lg mt-4'>B Tech in Computer Science with specialization in AI-ML</h4>
                        <h5 className='text-zinc-700'>Technocrats Institute of Technology & Science</h5>
                        <h4 className='text-lg mt-4'>Senior Secondary Education</h4>
                        <h5 className='text-zinc-700'>The Royal Ecole, Seoni</h5>
                        <h4 className='text-lg mt-4'>Secondary Education</h4>
                        <h5 className='text-zinc-700'>The Royal Ecole, Seoni</h5>
                    </div>
                    <div className='flex-grow text-end'>
                        <h4 className='text-lg mt-4'>2022 - 2026</h4>
                        <h4 className='text-lg mt-10'>2020 - 2022</h4>
                        <h4 className='text-lg mt-10'>2017 - 2020</h4>
                    </div>
                </div>
            </div>
            <div className='h-44 flex gap-4'>
                <div className='box w-44 rounded-3xl flex gap-4 pt-5 px-5 flex-col items-center'>
                    <div className='w-full gap-4 h-[5.23rem] rounded-xl border border-zinc-700/55 flex items-center justify-center'>
                        <FaGithub size={35} />
                        <FaXTwitter size={35} />
                    </div>
                    <div className='w-full h-10 flex'>
                        <div className='mr-8'>
                            <p className='text-xs text-zinc-700'>STAY WITH ME </p>
                            <p className='text-lg'>Profiles</p>
                        </div>
                        <GiPaperArrow size={20} className='-rotate-45'/>
                    </div>
                </div>
                <div className='box flex-grow rounded-3xl flex justify-between items-end p-7'>
                    <p className='text-4xl'>Let’s <br /> work <span className='text-[#031EA1]'>together.</span></p>
                    <GiPaperArrow size={20} className='-rotate-45 mb-2'/>
                </div>
                <div className='box w-44 rounded-3xl flex gap-4 pt-7 flex-col items-center'>
                    <Image src='/sign.svg' width={120} height={120} alt='sign' className=''></Image>
                    <div className='w-full flex pt-5 pl-5 pb-5'>
                        <div className='mr-4'>
                            <p className='text-xs text-zinc-700'>MORE ABOUT ME</p>
                            <p className='text-lg'>Credentials</p>
                        </div>
                        <GiPaperArrow size={20} className='-rotate-45'/>
                    </div>
                </div>
            </div>
            <div className=''></div>
        </div>
    </div>
  )
}

export default page