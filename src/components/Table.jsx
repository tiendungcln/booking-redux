import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever } from "react-icons/md";
import { deleteBooking } from '../redux/action';


const Table = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    const id = parseInt(e.currentTarget.id)
    dispatch(deleteBooking(id))
  }

  console.log(data)
  return (
    <>
      {
        data.length && (
          <div className='max-w-6xl mx-auto mt-5 bg-white'>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>DESTINATION FROM</th>
                    <th>DESTINATION TO</th>
                    <th>JOURNEY DATE</th>
                    <th>GUEST</th>
                    <th>TRAVEL CLASS</th>
                    <th>DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((data, index) => (
                      <tr key={index}>
                        <th>{data.from}</th>
                        <td>{data.to}</td>
                        <td>{data.date}</td>
                        <td>{data.guests}</td>
                        <td>{data.ticketclassName}</td>
                        <td><button id={`${data.id}`} onClick={(e) => handleDelete(e)} className='text-white btn-xs bg-red-500'><MdDeleteForever /></button></td>
                      </tr>
                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Table