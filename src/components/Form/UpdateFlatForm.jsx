
import { DateRange } from 'react-date-range'
import { categories } from '../Categories/CategoriesData'


const UpdateFlatForm = ({
  handleSubmit, 
  handleImage, 
  setFlatData, 
  flatData,
  handleDates,
  dates,
}) => {

    

  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-10'>
          <div className='space-y-1 text-sm'>
            <label htmlFor='location' className='block text-gray-600'>
              Location
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              name='location'
              id='location'
              type='text'
              value={flatData?.location}
              onChange={(e)=>setFlatData({...flatData, location: e.target.value})}
              placeholder='Location'
              required
            />
          </div>
          <div className='space-y-1 text-sm'>
            <label htmlFor='title' className='block text-gray-600'>
              Title
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              name='title'
              id='title'
              type='text'
              value={flatData?.title}
              onChange={(e)=>setFlatData({...flatData, title: e.target.value})}
              placeholder='Title'
              required
            />
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='category' className='block text-gray-600'>
              Category
            </label>
            <select
              required
              value={flatData?.category}
              onChange={(e)=>setFlatData({...flatData, category: e.target.value})}
              className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
              name='category'
            >
              {categories.map(category => (
                <option value={category.label} key={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className='space-y-1'>
            <label htmlFor='location' className='block text-gray-600'>
              Select Availability Range
            </label>
            <div className='flex justify-center pt-2'>
              {/* Calender */}
              {/* Calender */}
              <DateRange
              rangeColors={['#f43f5e']}
               editableDateInputs={true}
               onChange={item => handleDates(item)}
               moveRangeOnFirstSelection={false}
               ranges={[dates]}
              />
              </div>
          </div>

          <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
              <div className='flex flex-col w-max mx-auto text-center'>
                <label>
                  <input
                    className='text-sm cursor-pointer w-36 hidden'
                    type='file'
                    name='image'
                    onChange={(e)=>handleImage(e.target.files[0])}
                    id='image'
                    accept='image/*'
                    hidden
                  />
                  <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    Upload Image
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className='flex justify-between gap-2'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='price' className='block text-gray-600'>
                Rent
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='rent'
                id='rent'
                value={flatData?.rent}
                onChange={(e)=>setFlatData({...flatData, rent: e.target.value})}
                type='number'
                placeholder='Rent'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='guest' className='block text-gray-600'>
                Total guest
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='total_guest'
                id='total_guest'
                value={flatData?.guest}
                onChange={(e)=>setFlatData({...flatData, guest: e.target.value})}
                type='number'
                placeholder='Total guest'
                required
              />
            </div>
          </div>

          <div className='flex justify-between gap-2'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='bedrooms' className='block text-gray-600'>
                Bedrooms
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='bedrooms'
                id='bedrooms'
                value={flatData?.beds}
                onChange={(e)=>setFlatData({...flatData, beds: e.target.value})}
                type='number'
                placeholder='Bedrooms'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='bathrooms' className='block text-gray-600'>
                Bathrooms
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='bathrooms'
                id='bathrooms'
                value={flatData?.baths}
                onChange={(e)=>setFlatData({...flatData, baths: e.target.value})}
                type='number'
                placeholder='Bathrooms'
                required
              />
            </div>
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='description' className='block text-gray-600'>
              Description
            </label>

            <textarea
              id='description'
              value={flatData?.description}
                onChange={(e)=>setFlatData({...flatData, description: e.target.value})}
              className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
              name='description'
            ></textarea>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default UpdateFlatForm