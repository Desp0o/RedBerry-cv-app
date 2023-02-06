import {useRef, useEffect, useState } from "react";
import HeaderComponent from "../headerCom";


//ინპუტების ფუნქცია
function inputHanlder(e, state){
    state(e.currentTarget.value)
}


//რეგექსის შემოწმება
const regex1 = /^[ა-ჰ]{2,}$/;
function regexCheck(ref){
    if(regex1.test(ref.current.value)){
        ref.current.style.border = '1px solid #98E37E'
    }else if(ref.current.value.length === 0){
        ref.current.style.border = '1px solid #BCBCBC'
    }else{
        ref.current.style.border = '1px solid #EF5050'
    }
}

const regex2 = /^[ა-ჰ, 0-9,*!@#$%^&()-=+„“?<>":;']{2,}$/;
function regexCheckDescitpion(ref){
    if(regex2.test(ref.current.value)){
        ref.current.style.border = '1px solid red'
    }else{
        ref.current.style.border = '1px solid #BCBCBC'
    }
}

export default function Pinfo() {
    

    const inputNameRef = useRef()
    const inputSurNameRef = useRef()
    const inputAboutMeRef = useRef()

    const [name, setName] = useState(sessionStorage.getItem('name') || '')
    const [surName, setSurName] = useState(sessionStorage.getItem('surName') || '')
    const [aboutMe, setAboutNe] = useState(sessionStorage.getItem('aboutMe') || '')
    

    useEffect(()=>{
        sessionStorage.setItem('name', name) // name storage
        sessionStorage.setItem('surName', surName) // surname storage
        sessionStorage.setItem('aboutMe', aboutMe)

        regexCheck(inputNameRef)
        regexCheck(inputSurNameRef)

        regexCheckDescitpion(inputAboutMeRef)

    },[name, surName, aboutMe])
  
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
                            className='w-[371px] h-[48px] border border-[#BCBCBC] rounded-[4px] bg-[#FFF]' 
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
                            className='w-[371px] h-[48px] border border-[#BCBCBC] rounded-[4px] bg-[#FFF]' 
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
                                    flex items-center justify-center overflow-hidden relative" >
                        <input  type='file'
                                accept="image/png, image/jpg, image/webp, image/jpeg"
                                className="scale-[2] absolute left-0 opacity-0"
                        />
                        <span className="text-[14px] text-[#FFF] font-[400]">ატვირთვა</span>
                    </div>
                    
                </div>

                {/* lil bio text input */}
                <div className="w-[846px] h-[148px] pl-[24px] pr-[24px] pt-[8px] pb-[8px] my-[41px] 
                                mx-[124px] flex flex-col gap-[8px]">
                    <p>ჩემ შესახებ (არასავალდებულო)</p>

                    <input 
                        ref={inputAboutMeRef}
                        type='text' 
                        className="w-[798px] h-[103px] bg-[#FFF] border border-[#BCBCBC] rounded-[4px] box-border"
                        value={aboutMe}
                        onChange={(e)=>inputHanlder(e,setAboutNe)}
                    />
                </div>
            </div>

            

        </div>

    )
}