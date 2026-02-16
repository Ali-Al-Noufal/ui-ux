import { IoIosArrowRoundForward, IoMdArrowUp } from "react-icons/io"
import { Link } from "react-scroll"


const Ask = ({title,description,span}) => {
  return (
<div className=" max-w-screen h-110 dark:bg-[#1B2431] relative flex justify-center items-end">
    <Link className="absolute top-0 right-5 md:top-[-20%] md:right-20 " to="home" smooth={true}>

<div className="w-12.5 h-12.5 bg-[#0C96E2] hover:bg-[#1D2130] hover:border-[#FFFFFF] shadow-xl/20 border border-[#0C96E2] rounded-xl flex justify-center items-center">
<p className="text-3xl text-[#FFFFFF]"><IoMdArrowUp /></p>
</div>
</Link>
<svg className="absolute top-[-40%]  md:top-[-50%] left-3 z-99" width="210" height="280" viewBox="0 0 210 280" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="198.927" cy="208.619" r="8" transform="rotate(148 198.927 208.619)" fill="#7B55EC"/>
<circle cx="12.8054" cy="56.0677" r="13" transform="rotate(148 12.8054 56.0677)" fill="#0C96E2"/>
<rect x="82.6466" y="175.147" width="49.4086" height="49.4086" rx="12" transform="rotate(-177.742 82.6466 175.147)" fill="#7DE0EA"/>
</svg>

<div className="w-screen h-95 mt-30 relative">
<div className="w-[90vw] lg:w-[90%] h-85 lg:top-4 border border-[#583FBC] rounded-4xl bg-[#583FBC] absolute left-[3%] lg:left-[5%] z-99 flex md:justify-center md:items-center">
<svg className="absolute -z-10 w-[90vw] lg:w-292 " width="1169" height="321" viewBox="0 0 1169 321" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.25">
<path d="M-0.333252 198.184C13.5221 198.184 118.823 317.34 258.168 317.34C451.748 317.34 555.975 -116.735 828.614 4.60415C1044.76 100.8 1139.77 111.093 1179.35 44.191" stroke="#BECED8"/>
<path d="M-0.333252 95.2578C11.9387 104.363 118.823 317.34 258.168 317.34C451.748 317.34 587.644 -69.2311 860.283 52.1083C1076.43 148.304 1110.47 132.865 1179.35 83.7778" stroke="#BECED8"/>
<path d="M-0.333252 261.522C13.5221 261.522 118.823 320.507 258.168 320.507C451.748 320.507 558.236 -187.581 812.779 -31.8159C998.441 81.7982 1108.1 126.927 1179.35 75.8603" stroke="#BECED8"/>
</g>
</svg>
<div className="w-full lg:w-[80%] h-full lg:h-30 flex flex-wrap justify-center lg:justify-between items-center">
<div className="w-full  lg:w-[53%] h-[70%] ps-[10%] lg:ps-0  lg:h-full flex flex-col justify-center items-start">
    <h1 className="md:text-[30px] lg:text-5xl font-semibold text-[#FFFFFF]">{title}</h1>
<p className="text-[#FFFFFF] text-[20px] font-normal  mt-5">{description}<span className="font-bold">{span}</span></p>
</div>
<div className="w-full lg:w-[20%] h-[20%] lg:h-full flex justify-center items-start lg:items-center">
<Link to="contact" smooth={true}><button className="w-40 h-12.5 bg-[#0C96E2] border border-[#0C96E2] rounded-md text-[#FFFFFF] text-[14px] font-semibold flex justify-center items-center gap-3 hover:bg-[#1D2130] hover:border-[#FFFFFF]"><p className="text-[14px] font-semibold">Contact</p> <p className="text-3xl"><IoIosArrowRoundForward /></p></button></Link>
</div>
</div>
</div>
<div className="w-[90vw] lg:w-[90%] h-85 lg:top-4 border border-[#0C96E2] rounded-4xl absolute left-[3%] lg:left-[5%] bg-[#0C96E2] rotate-182 "></div>

</div>

</div>
  )
}

export default Ask
