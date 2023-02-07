import {useRef, useEffect, useState } from "react";
import CV from "../CvComponent";
import HeaderComponent from "../headerCom";


//ინპუტების ფუნქცია
function inputHanlder(e, state){
    state(e.currentTarget.value)
}

//რეგექსის შემოწმება
function regexCheck(ref){
    const regex1 = /^[ა-ჰ]{2,}$/;
    
    if(regex1.test(ref.current.value)){
        ref.current.style.border = '1px solid #98E37E'
    }else{
        ref.current.style.border = '1px solid #BCBCBC'
    }
}

function regexCheckDescitpion(ref){
    const regex2 = /^[ა-ჰ, 0-9,*!@#$%^&()-=+„“?<>":;']{2,}$/;

    if(regex2.test(ref.current.value)){
        ref.current.style.border = '1px solid #98E37E'
    }else{
        ref.current.style.border = '1px solid #BCBCBC'
    }
}

function emailCheck(ref){
    const regex2 = /^[A-Za-z, 0-9,*!@#$%^&()-=+„“?<>":;']{13,}$/;
    if(ref.current.value.endsWith("@redberry.ge") && regex2.test(ref.current.value)){
        ref.current.style.border = '1px solid #98E37E'
    }else{
        ref.current.style.border = '1px solid #BCBCBC'
    }
}

function numberCheck(ref){
    const numberRegex = /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/

    if(numberRegex.test(ref.current.value)){
        ref.current.style.border = '1px solid #98E37E'
    }else{
        ref.current.style.border = '1px solid #BCBCBC'
    }
}


export default function Pinfo() {
    const inputNameRef    = useRef()
    const inputSurNameRef = useRef()
    const avatarRef = useRef()
    const inputAboutMeRef = useRef()
    const inputEmailRef   = useRef()
    const inputNumberRef  = useRef()

    const [name, setName]       = useState(sessionStorage.getItem('name') || '')
    const [surName, setSurName] = useState(sessionStorage.getItem('surName') || '')
    const [avatar, setAvatar]   = useState(sessionStorage.getItem('avatar') || '')
    const [aboutMe, setAboutNe] = useState(sessionStorage.getItem('aboutMe') || '')
    const [email, setEmail]     = useState(sessionStorage.getItem('email') || '')
    const [number ,setNumber]   = useState(sessionStorage.getItem('number') || '')
    

    useEffect(()=>{
        sessionStorage.setItem('name', name) // name storage
        sessionStorage.setItem('surName', surName) // surname storage
        sessionStorage.setItem('aboutMe', aboutMe)
        sessionStorage.setItem('email', email)
        sessionStorage.setItem('number', number)

        regexCheck(inputNameRef)
        regexCheck(inputSurNameRef)

        regexCheckDescitpion(inputAboutMeRef)
        emailCheck(inputEmailRef)

        numberCheck(inputNumberRef)
        setNumber(inputNumberRef.current.value.replace(/(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5'))

        console.log(avatar);
        
    },[name, surName, aboutMe, email, number, avatar])


    
    function fileHandler(e){
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsText(file)
        const fileURL = URL.createObjectURL(file);
        setAvatar(fileURL)
        sessionStorage.setItem('avatar', avatar)
    }
  
    return (
        <div className="w-full h-[100vh] bg-[#F9F9F9] flex">

            {/* left side  */}
            <div className="w-[1088px] h-[100vh] bg-[#E6E6E6] box-border">
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
                        <input  
                                type='file'
                                accept="image/png, image/jpg, image/webp, image/jpeg"
                                className="scale-[2] absolute left-0 opacity-0"
                                onChange={fileHandler}
                        />
                        <span className="text-[14px] text-[#FFF] font-[400]">ატვირთვა</span>
                    </div>
                    
                </div>

                {/* lil bio text input */}
                <div className="w-[846px] pl-[24px] pr-[24px] pt-[8px] pb-[8px] my-[41px] 
                                mx-[124px] flex flex-col gap-[8px] box-border">
                    <p className={`text-[16px] font-[500]`}>ჩემ შესახებ (არასავალდებულო)</p>

                    <input 
                        ref={inputAboutMeRef}
                        type='text' 
                        className="w-[798px] h-[103px] bg-[#FFF] border border-[#BCBCBC] rounded-[4px] box-border"
                        value={aboutMe}
                        onChange={(e)=>inputHanlder(e,setAboutNe)}
                    />
                </div>

                {/* email input */}
                <div className="w-[846px] pl-[24px] pr-[24px] pt-[8px] pb-[8px] mx-[124px] flex flex-col gap-[8px]">
                    <p className={`text-[16px] font-[500]`}>ელ.ფოსტა</p>
                    <input
                        className="w-[798px] h-[48px] rounded-[4px] bg-[#FFF] border border-[#BCBCBC] box-border"
                        ref={inputEmailRef}
                        value={email}
                        type='email'
                        onChange={(e) => inputHanlder(e, setEmail)}
                    />
                    <p className="text-[#2E2E2E] text-[14px] font-[300]">უნდა მთავრდებოდეს @redberry.ge-ით</p>
                </div>

                {/* number input */}
                <div className="w-[846px] pl-[24px] pr-[24px] pt-[8px] pb-[8px] mx-[124px] my-[13px] flex flex-col gap-[8px]">
                    <p className={`text-[16px] font-[500]`}>მობილურის ნომერი</p>
                    <input
                        ref={inputNumberRef}
                        className="w-[798px] h-[48px] rounded-[4px] bg-[#FFF] border border-[#BCBCBC] box-border"
                        type='text'
                        value={number}
                        onChange={(e) => inputHanlder(e, setNumber)}
                    />
                    <p className="text-[#2E2E2E] text-[14px] font-[300]">უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
                </div>
            </div>

            {/* right side */}
            <div className="w-[832px] h-[100vh] box-border pl-[80px]">
                <CV 
                    
                    name={name}
                    surName={surName}
                    email={email}
                    number={number}
                    bio={aboutMe}
                    avatar={avatar}
                />
            </div>

        </div>

    )
}