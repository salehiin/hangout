import PropTypes from 'prop-types'
import Button from '../Shared/Button/Button'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { differenceInCalendarDays } from 'date-fns';
import BookingModal from '../Modal/BookingModal';
import useAuth from '../../hooks/useAuth';

const FlatReservation = ({ flat, refetch }) => {
  const {user} = useAuth()

  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState([
    {
      startDate: new Date(flat.from),
      endDate: new Date(flat.to),
      key: 'selection'
    }
  ]);

  const closeModal = () =>{
    setIsOpen(false)
  }

  //total days * rent
  const totalRent = parseInt(
    differenceInCalendarDays(new Date(flat.to), new Date(flat.from))
  ) * flat?.rent
console.log(totalRent)
  return (
    <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white'>
      <div className='flex items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {flat?.rent}</div>
        <div className='font-light text-neutral-600'>/night</div>
      </div>
      <hr />
      <div className='flex justify-center'>
        {/* Calender */}
        <DateRange
        showDateDisplay={false}
        rangeColors={['#f6536d']}
          // editableDateInputs={true}
          onChange={item => 
            {
              console.log(item)
            setState([
              {
                startDate: new Date(flat.from),
                endDate: new Date(flat.to),
                key: 'selection'
              }
            ])}
            }
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
        </div>
      <hr />
      <div className='p-4'>
        <Button disabled={flat?.booked === true} onClick={()=>setIsOpen(true)} label={flat?.booked ? 'Booked' : 'Reserve'} />
      </div>
      {/* Modal */}
      <BookingModal 
          isOpen={isOpen}
          refetch={refetch} 
          closeModal={closeModal} 
          bookingInfo={{
            ...flat, 
          rent: totalRent, 
          guest: {name: user?.displayName, email: user?.email, image: user?.photoURL,},}
      }></BookingModal>
      <hr />
      <div className='p-4 flex items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>${totalRent}</div>
      </div>
    </div>
  )
}

FlatReservation.propTypes = {
  flat: PropTypes.object,
  refetch: PropTypes.func,
}

export default FlatReservation
