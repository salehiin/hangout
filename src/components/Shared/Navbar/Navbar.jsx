import Container from '../Container'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'
import HostModal from '../../Modal/HostRequestModal'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import toast from "react-hot-toast";
import { PiBuildingApartmentThin } from 'react-icons/pi'
import { GiGreenhouse  } from 'react-icons/gi'
import { BiSolidBuildingHouse   } from 'react-icons/bi'
import { SiHomebridge   } from 'react-icons/si'
import { FcHome   } from 'react-icons/fc'

const Navbar = () => {
  const axiosSecure = useAxiosSecure()
  const { user, logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)


  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () =>{
    setIsModalOpen(false)
  }

  const modalHandler = async () =>{
    console.log('Want to listing my property')
    
    try{
      const currentUser = {
        email:  user?.email,
        role: 'guest',
        status: 'Requested',
      }
      const {data} = await axiosSecure.put(`/user`, currentUser)
      console.log(data)
      if(data.modifiedCount > 0) {
        toast.success('Request Successful! Wait for admins confirmation')
      }else{
        toast.success('Please! Wait for admins approval')
      }
    }catch(err) {
      console.log(err)
      toast.error(err.message)
    }finally{
      closeModal()
    }
  } 

  return (
    <div className='fixed w-full bg-yellow-500 z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            <div className="flex justify-between gap-16">
              {/* Logo */}
              <Link to='/' className='flex items-center gap-1 text-xl text-blue-500'>
                {/* <img
                className='bg-blue-500'
                  // className='hidden md:block'
                  src='https://i.ibb.co/4ZXzmq5/logo.png'
                  alt='logo'
                  width='100'
                  height='100'
                /> */}
                <SiHomebridge  className='text-2xl' />
                <p>HangOut</p>
              </Link>
              <div className='flex gap-4 text-blue-500 text-lg  py-3 items-center'>
                <Link to='/'><p>Home</p></Link>
                <Link to='/apartments'><p>Apartments</p></Link>
              </div>
            </div>  
            
                
                {/* Dropdown Menu */}
                <div className='relative'>
                  <div className='flex flex-row items-center gap-3'>
                    {/* Become A Host btn */}
                    <div className='hidden md:block'>
                      {/* {!user && ( */}
                        <button
                          // disabled={!user}
                          onClick={()=>setIsModalOpen(true)}
                          className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition text-blue-500'
                        >
                          Add a Listing
                        </button>
                      {/* )} */}
                    </div>
                    {/* Modal */}
                    <HostModal isOpen={isModalOpen} closeModal={closeModal} modalHandler={modalHandler} ></HostModal>
                    {/* Dropdown btn */}
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                    >
                      <AiOutlineMenu />
                      <div className='hidden md:block'>
                        {/* Avatar */}
                        <img
                          className='rounded-full'
                          referrerPolicy='no-referrer'
                          src={user && user.photoURL ? user.photoURL : avatarImg}
                          alt='profile'
                          height='30'
                          width='30'
                        />
                      </div>
                    </div>
                  </div>
                  {isOpen && (
                    <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                      <div className='flex flex-col cursor-pointer'>
                        <Link
                          to='/'
                          className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Home
                        </Link>

                        {user ? (
                          <>
                            <Link
                              to='/dashboard'
                              className='block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                              Dashboard
                            </Link>
                            <div
                              onClick={logOut}
                              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                            >
                              Logout
                            </div>
                          </>
                        ) : (
                          <>
                            <Link
                              to='/login'
                              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                              Login
                            </Link>
                            <Link
                              to='/signup'
                              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                              Sign Up
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar

// d-2 v-5 41:00
