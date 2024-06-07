import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({ flat }) => {
  return (
    <Link to={`/flat/${flat?._id}`} className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
        >
          <img
            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
            src={flat?.image}
            alt='flat'
          />
          <div
            className='
              absolute
              top-3
              right-3
            '
          ></div>
        </div>
        <div className='font-semibold text-lg'>{flat?.apartmentNo}</div>
        <div className='font-light text-neutral-500'>1 year .</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>$ {flat?.rent}</div>
          <div className='font-light'>month</div>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  flat: PropTypes.object,
}

export default Card


//d2 p3 14:20