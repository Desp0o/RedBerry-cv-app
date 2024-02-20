import { Link } from "react-router-dom";

export default function HeaderComponent(props){
    function clearStorages(){
        sessionStorage.removeItem("user")
    }

    return(
        <div className="pl-[48px] pt-[57px] pr-[150px]">

            {/* arrow and text */}
            <div className="flex gap-[61px]">
                {/* arrow to main page */}
                <Link to='/components/Main/Main' className="cursor-pointer" onClick={clearStorages}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="white"/>
                        <path d="M22.8577 12.3522C23.0832 12.5778 23.2099 12.8837 23.2099 13.2026C23.2099 13.5216 23.0832 13.8275 22.8577 14.053L16.9035 20.0073L22.8577 25.9615C23.0768 26.1883 23.198 26.4922 23.1953 26.8076C23.1926 27.123 23.0661 27.4247 22.843 27.6477C22.62 27.8707 22.3183 27.9972 22.0029 28C21.6875 28.0027 21.3837 27.8815 21.1568 27.6623L14.3522 20.8577C14.1267 20.6321 14 20.3262 14 20.0073C14 19.6883 14.1267 19.3824 14.3522 19.1568L21.1568 12.3522C21.3824 12.1267 21.6883 12 22.0073 12C22.3262 12 22.6321 12.1267 22.8577 12.3522Z" fill="#2E2E2E"/>
                    </svg>
                </Link>

                {/* title & page number & underline*/}
                <div className="w-full flex flex-col gap-[12px]">
                    <div className="flex items-center justify-between">
                        <p className="font-[700] text-[24px] text-[#1A1A1A] leading-[29px]">{props.title}</p>
                        <p className="font-[400] text-[20px] text-[#1A1A1A] leading-[24px]">{props.page}</p>
                    </div>

                    {/* underline */}
                    <div className="pl-[150px] border-y-[1px] border-[#1A1A1A]"/>
                </div>
            </div>

            
        </div>
    )
}