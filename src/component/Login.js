import React from 'react'
import ImagesLogo from '../assets/imags.png' ;
import  DataReport from '../assets/Data-report.png';
import CompanyLogo from '../assets/logo.png';
 

export const Login = () => {
  return (
    <div className=''>


       
                <section  className="grid grid-cols-3 grid-flow-col gap-4 bg-gray-400  w-[100%] h-[100%]">
                  {/* 1 */}
                  <div className=''><section>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-[20rem]'>
    <div className='col-span-1 md:col-span-2 lg:col-span-3 flex items-start justify-start mt-10 -ml-[6rem]'>
      <img src={ImagesLogo} alt='login-Img' width='312px' height='93px' className='-ml-[10rem]' />
    </div>
    
    <div className='col-span-1 md:col-span-1 lg:col-span-1 flex justify-center'>
      {/* LogIn Form */}
      <section className='min-w-[100%] md:min-w-[470px] min-h-full'>
        <form className="flex flex-col mt-4">

          <div>
            <span className='text-3xl text-[#020C6B]'>Login</span>
            <p className='text-xl'>Please login to continue</p>
          </div>

          {/* input box */}
          <div className='min-w-[300px] md:min-w-[416px] min-h-[295px]'>
            <input type='email' placeholder="Email" className='min-w-[22rem] h-[48px] border-2 text-2xl rounded-md border-slate-400 mb-4' />
            <div className='relative'>
              <input type='password' placeholder="Password" className='min-w-[22rem] h-[48px] border-2 text-2xl rounded-md border-slate-400 mb-4 pr-12' />
            </div>

            {/* radio button */}
            <div className='flex items-center gap-[4.4rem] '>
              <label className='flex items-center'>
                <input type="checkbox" id="checkvbox" name="checkbox" value="checkbox" />
                <span className='ml-1'>Keep Me Logged In</span>
              </label>
              <span className='text-black cursor-pointer'>Forget Password?</span>
            </div>

            {/* Login button */}
            <button className='text-2xl min-w-[22rem] bg-[#020C6B] rounded-[8px] font-medium text-white px-[12px] py-[8px] mt-6'>
              LOGIN
            </button>
            <p className='text-sm mt-4'>By logging in, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </form>
      </section>
    </div>
  </div>
</section>

</div>
                  <div className='col-span-2'>
                    {/* 2 */}
                    <div className="border-l-2 border-solid border-gray-500 min-h-[400px] absolute left-1/2 
                  transform -translate-x-1/2 top-10"></div></div>
                  <div>
                    {/* 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

{/* Placeholder for the first grid column */}
<div className="hidden md:block md:col-span-1"></div>

{/* Section with Text and Image */}
<section className="   flex flex-col  flex-wrap items-center justify-start md:col-span-1 w-auto md:w-[600px] h-[500px] mt-[4rem] ">
  <h2 className="text-2xl text-wrap md:max-w-screen">Data Visualized, Decisions Amplified</h2>
 
  <img src={DataReport} alt="DataReport" className="max-w-full h-[350px]" />

 <div> <p className="text-[0.8rem]   ml-10  text-wrap  md:flex md:flex-row md:max-h-screen ">
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p></div>

</section>

</div>
</div>

                </section>

        
    </div>
  )
}
