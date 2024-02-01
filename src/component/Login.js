import React from 'react'
import ImagesLogo from '../assets/imags.png' ;

export const Login = () => {
  return (
    <div className=''>


        <section>
          <div className='box1'>
          <img src={ImagesLogo} alt='login-Img' width='212px' height='83px' className=' mt-10 ml-10'  />

          </div>

          <div className='mt-[4rem] main-box2'>
          <span className='box2  '>
          <h4 className='text-3xl text-[#020C6B]  ml-[6rem] text-wrap'    >Login</h4>
          <p className='text-[12px] text-wrap ml-[6rem]'>Please login to continue</p>
          
          </span>
          <br/>
            <form className=' box3'>
            <input type='mail' placeholder="Email" 
              className={`min-w-[346px] min-h-[48px] border-2 text-[1.2rem] rounded-md border-slate-400 
               `} />
               <br/>
               

            <input type='password' placeholder="Password" 
             className={`min-w-[346px] min-h-[48px] border-2 text-[1.2rem] rounded-md
             border-slate-400 mt-2 `} />
                   
           
         <div  className=' box-3 flex flex-row gap-[3.7rem] flex-wrap'>
          <span>
          <label  className='w-full flex'>
           
          <input type="checkbox" id="checkvbox" name="checkbox" value=" checkbox"   />
          <p className='text-[0.8rem]'>Keep Me Logged In</p>
           </label>

          
                     </span>
                     <br/>
                     <span className='flex text-[0.8rem] '>
                      Forget Password ?
                     </span>


          </div>
          {/*  It's Login button*/}
          <span>
            <button className='text-[18px]  min-w-[346px] min-h-[48px]   bg-[#020C6B] rounded-[8px] font-medium text-white px-[10px] py-[7px] mt-2'>
              LOGIN
            </button>
            <p className='text-[12px] text-gray-500'>By logining up, you agree to our Terms of Service and <br/> Privacy Policy</p>
          </span>
          

        


            </form>
          </div>

        </section>
    </div>
  )
}
