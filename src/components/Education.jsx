

const Education = ({informations}) => {
  return (
    <div className="p-[5%] h-fit md:mb-40 relative">
        <svg className="absolute right-2 top-10 md:top-0 -z-50" width="187" height="277" viewBox="0 0 187 277" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10.0806" cy="45.219" r="8" transform="rotate(-18 10.0806 45.219)" fill="#7B55EC"/>
<circle cx="153.768" cy="238.266" r="13" transform="rotate(-18 153.768 238.266)" fill="#0C96E2"/>
<rect x="114.809" y="105.828" width="49.4086" height="49.4086" rx="12" transform="rotate(16.2579 114.809 105.828)" fill="#7DE0EA"/>
</svg>

    <div className="w-full flex flex-col justify-between items-center pb-10">
    <h1 className="text-[#0C96E2] font-medium text-[20px]">Education and Experience</h1>
    <p className=" font-semibold text-[25px] md:text-[40px] dark:text-[#FFFFFF]">Education & Experience</p>
    </div>
    <div className="w-full h-140 flex flex-wrap justify-between md:h-70">
            
            {informations?.map((info,index)=>{
                return(    <div key={index} className="overflow-hidden md:h-[50%] h-30 my-2.5  w-full md:w-[45%] px-[5%] flex justify-between items-start ">
                <div className="relative flex flex-nowrap justify-center items-start h-full">
<svg className="absolute z-99 top-2.5 " width="22" height="279" viewBox="0 0 22 279" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="20" height="20" rx="10" fill="white"/>
<rect x="1" y="1" width="20" height="20" rx="10" stroke="#1D2939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="7 7"/>
<circle cx="11" cy="11" r="7.5" fill="#0C96E2"/>
</svg>
<svg width="3" height="278" viewBox="0 0 3 278" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1.5" x2="1.5" y2="278" stroke="#344054" stroke-width="3" stroke-dasharray="6 6"/>
</svg>

            </div>            
                <div className="h-full pt-1.5 md:pt-0 w-full md:w-[90%] ">
                    <h1 className="text-[#344054] text-[20px] lg:text-[25px] font-medium dark:text-[#FFFFFF]">{info.title}</h1>
                    <p className="text-[#98A2B3] text-[16px] mt-2">{info.description}</p>
                </div>
                </div>)            
            })}
            </div>
    </div>
  )
}

export default Education
