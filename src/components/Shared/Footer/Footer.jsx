import { FaSquareFacebook, FaSquareTwitter, FaInstagram, FaSquareWhatsapp } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='px-10 flex items-center justify-between  text-gray-800 relative bottom-0 left-0 bg-black'>
      <div className='py-6 text-sm text-center text-blue-300'>
        © 2024-2025 HangOut Inc. All rights reserved.
      </div>
      <div className="text-yellow-500 flex gap-6 text-2xl">
      <FaSquareFacebook />
      <FaSquareTwitter />
      <FaInstagram />
      <FaSquareWhatsapp />

      </div>
    </footer>
  )
}

export default Footer
