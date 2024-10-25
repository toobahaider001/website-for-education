import React from 'react'
interface button{
    label:string;
    primary?:boolean;
    secondary?:boolean;
}
const Button:React.FC<button> = ({label,primary,secondary}) => {
  return (
    <div>
        <button className={` rounded-xl md:rounded-3xl text-white h-[40px] text-sm md:text-lg w-[70px] md:h-[50px] md:w-[150px] font-bold ${primary? "bg-purple-900":""} ${secondary?"bg-orange-500":""}`}>{label}<></></button>
    </div>
  )
}

export default Button