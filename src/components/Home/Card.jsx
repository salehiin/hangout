import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

const Card = ({ flat }) => {
  const fromDate = flat?.from && new Date(flat.from);
  const toDate = flat?.to && new Date(flat.to);
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
        <div className='font-semibold text-lg'>{flat?.title}</div>
        {/* <div className='font-light text-neutral-500'>1 year .</div> */}
        {/* <div className='flex text-[12px]'>
          <p>From:&nbsp;</p>
        <div className='font-light text-neutral-500'> {fromDate && format(fromDate, 'P')}</div>
        </div>
        <div className='flex text-[12px]'>
          <p>To:&nbsp;</p>
        <div className='font-light text-neutral-500'>{toDate && format(toDate, 'P')}</div>
        </div> */}
        <div className='text-sm'>For {flat?.guest} residents</div>
        <div className='flex flex-row items-center gap-1'>
        
          <div className='font-semiboldtext-sm'>$ {flat?.rent}</div>
          <div className='font-light text-[10px]'>per day</div>
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