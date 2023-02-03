import { Link } from 'react-router-dom'

import logo from '../../images/logo.png'
import stamp from '../../images/stamp.png'

export default function MainScreen(){
    return(
        <div className="w-full h-[100vh] bg-[url('./images/mainBG.png')] bg-cover bg-no-repeat">

            {/* logo and underline */}
            <div className='w-full pl-[70px] pr-[70px] pt-[25px] flex flex-col gap-[26px]'>
                <img src={logo} alt='logo' className='w-[236px]' />

                <div className='border-y-[1px] border-[#1A1A1A]'></div>
            </div>

            {/* button */}
            <Link to='#'>
                <div className='w-[464px] h-[60px] p-[18px 60px] bg-[#1A1A1A] rounded-[8px] flex items-center justify-center
                            absolute translate-x-[-50%] left-[50%] translate-y-[-50%] top-[50%] cursor-pointer'>
                     <span className='text-[#FFF]'>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</span>
                </div>
            </Link>

            <img src={stamp} alt='stamp' className='absolute right-[545px] top-[473px]' />
            
        </div>
    )
}