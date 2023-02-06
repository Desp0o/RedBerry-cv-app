import {useRef, useEffect, useState } from "react";
import HeaderComponent from "../headerCom";


//ინპუტების ფუნქცია
function inputHanlder(e, state){
    state(e.currentTarget.value)
}


//რეგექსის შემოწმება
const regex = /^[ა-ჰ]{2,}$/;
function regexCheck(ref){
    if(regex.test(ref.current.value)){
        ref.current.style.border = '1px solid #98E37E'
    }else if(ref.current.value.length === 0){
        ref.current.style.border = '1px solid #BCBCBC'
    }else{
        ref.current.style.border = '1px solid #EF5050'
    }
}

export default function Pinfo() {
    

    const inputNameRef = useRef()
    const inputSurNameRef = useRef()

    const [name, setName] = useState(sessionStorage.getItem('name') || '')
    const [surName, setSurName] = useState(sessionStorage.getItem('surName') || '')

    

    useEffect(()=>{
        sessionStorage.setItem('name', name) // name storage
        sessionStorage.setItem('surName', surName) // surname storage

        regexCheck(inputNameRef)
        regexCheck(inputSurNameRef)

    },[name, surName])
  
    return (
        <div className="w-full h-[100vh] box-border bg-[#F9F9F9]">

            {/* left side  */}
            <div className="w-[1098px] h-[100vh] bg-[#F9F9F9] box-border">
                <HeaderComponent
                    title='ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ'
                    page='1/3'
                />

                {/* name and surname input */}
                <div className="w-full  pl-[126px] pr-[150px] my-[106px] flex gap-[8px]">

                {/* სახელის ინფუთი */}
                <div className="pl-[24px] pr-[24px] box-border flex flex-col gap-[8px]">
                    <span className="text-[16px] font-[500]">სახელი</span>
                    <input 
                        ref={inputNameRef}
                        className='w-[371px] h-[48px] border border-[#BCBCBC] rounded-[4px]' 
                        name='name' 
                        type='text' 
                        value={name}
                        onChange={(e)=>inputHanlder(e, setName)}
                    />
                    <span className="text-[14px] font-[300]">მინიმუმ 2 ასო, ქართული ასოები</span>
                </div>

                {/* გვარის ინფუთი */}
                <div className="pl-[24px] pr-[24px] box-border flex flex-col gap-[8px]">
                    <span className="text-[16px] font-[500]">სახელი</span>
                    <input 
                        ref={inputSurNameRef}
                        className='w-[371px] h-[48px] border border-[#BCBCBC] rounded-[4px]' 
                        name='name' 
                        type='text' 
                        value={surName}
                        onChange={(e)=>inputHanlder(e, setSurName)}
                    />
                    <span className="text-[14px] font-[300]">მინიმუმ 2 ასო, ქართული ასოები</span>
                </div>
                
                
                
                
                </div>

                {/* image upload input section */}
                <div className="pl-[150px] flex gap-[19px]">
                    <p className="text-[18px] font-[500]">პირადი ფოტოს ატვირთვა</p>

                    <div className="bg-[#0E80BF] rounded-[4px] w-[107px] h-[27px] pt-[10px] pr-[10px] pb-[12px] pl-[10px] 
                                    flex items-center justify-center overflow-hidden" >
                        <input  type='file'
                                accept="image/png, image/jpg, image/webp, image/jpeg"
                                className="scale-[5] opacity-0 absolute"
                        />
                        <span className="text-[14px] text-[#FFF] font-[400]">ატვირთვა</span>
                    </div>
                    
                </div>
            </div>

            

        </div>

    )
}