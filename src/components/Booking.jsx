import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { makeBooking } from '../redux/action';

const Booking = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const size = data.length;

  const [bookingData, setBookingData] = useState({});

  const handleChange = (e) => {
    // console.log(e.target.value)
    const newBookingData = { ...bookingData };
    newBookingData[e.target.name] = e.target.value;
    setBookingData(newBookingData)
  }

  const handleBook = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    if (Object.keys(bookingData).length === 5) {
      dispatch(makeBooking({ ...bookingData, id: size + 1 }))
    } else {
      alert("Please select data properly!")
    }
  }
  console.log(bookingData)
  return (
    <div className='md:mt-[160px] mt-[100px] mx-4 relative'>
      <div className='bg-white rounded-md max-w-6xl w-full mx-auto'>
        <form className='flex flex-col md:flex-row'>
          {/* from */}
          <div className='py-1.5 px-2.5 flex-1 border-r-2'>
            <p>Destination From</p>
            <div className='flex flex-row'>
              <select
                required
                onChange={(e) => handleChange(e)}
                name='from'
                id='from'
                className='outline-none p-2 w-full'
              >
                <option value=''>Please Select</option>
                <option>New York</option>
                <option>London</option>
                <option>Paris</option>
                <option>Rome</option>
              </select>
            </div>
          </div>

          {/* destination to */}
          <div className='py-1.5 px-2.5 flex-1 border-r-2'>
            <p>Destination To</p>
            <div className='flex flex-row'>
              <select
                required
                onChange={(e) => handleChange(e)}
                name='to'
                id='to'
                className='outline-none p-2 w-full'
              >
                <option value=''>Please Select</option>
                <option>New York</option>
                <option>London</option>
                <option>Paris</option>
                <option>Rome</option>
              </select>
            </div>
          </div>

          {/* date */}
          <div className='py-1.5 px-2.5 flex-1 border-r-2'>
            <p>Journey Date</p>
            <div className='flex flex-row'>
              <input
                required
                onChange={(e) => handleChange(e)}
                type='date'
                name='date'
                min={new Date().toISOString().split("T")[0]}
                className='outline-none p-2 w-full'
              />
            </div>
          </div>

          {/* Guest Option*/}
          <div className='py-1.5 px-2.5 flex-1 border-r-2'>
            <p>Guests</p>
            <div className='flex flex-row'>
              <select
                required
                onChange={(e) => handleChange(e)}
                name='guests'
                id='guests'
                className='outline-none p-2 w-full'
              >
                <option value=''>Please Select</option>
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4 Persons</option>
              </select>
            </div>
          </div>

          {/* travel class */}
          <div className='py-1.5 px-2.5 flex-1 border-r-2'>
            <p>Travel Class</p>
            <div className='flex flex-row'>
              <select
                required
                onChange={(e) => handleChange(e)}
                name='ticketclassName'
                id='ticketclassName'
                className='outline-none p-2 w-full'
              >
                <option value=''>Please Select</option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          {/* button */}
          <button
            onClick={(e) => handleBook(e)}
            type='submit'
            className='bg-indigo-600 text-white px-8 py-1 space-x-2 text-center flex items-center justify-center'
          >
            <FaPlus className='mr-1' />Book Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default Booking