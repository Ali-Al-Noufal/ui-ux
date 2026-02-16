


const Section = ({children,id}) => {
  return (
    <div id={id} name={id} className="max-w-screen h-fit overflow-hidden  dark:bg-[#1B2431]">
      {children}
    </div>
  )
}

export default Section
