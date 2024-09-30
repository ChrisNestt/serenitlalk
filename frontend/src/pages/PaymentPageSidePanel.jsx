/* eslint-disable react/prop-types */
// import convertTime from '../utils/convertTime'
// import { Link } from 'react-router-dom'
// import Doctor from '../../../backend/models/DoctorSchema'


import convertTime from '../utils/convertTime';
import { Link } from 'react-router-dom';



const PaymentPageSidePanel = ({ doctorId, ticketPrice, timeSlots }) => {


    return (
        <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
            <div className="flex items-center justify-between mb-[10px]">
                <p className='text-[28px] mt-0 font-bold'>Total Fee</p>
                <span className='text-[16px] leading-7 lg:text-[20px] lg:leading-8 font-bold'>Rp{(1.15 * ticketPrice).toFixed(2)}</span>
            </div>

            <hr style={{ border: '1px solid gray' }} />


            <div className='mt-[10px] mb-[10px]'>
                <p className='text__para mt-0 font-medium'>Fee Details</p>


                <ul>
                    {ticketPrice && (
                        <>
                            <li>- Base Booking Fee: Rp{ticketPrice.toFixed(2)}</li>
                            <li>- Website Fee (5%): Rp{(0.05 * ticketPrice).toFixed(2)}</li>
                            <li>- Tax (10%): Rp{(0.1 * ticketPrice).toFixed(2)}</li>
                        </>
                    )}
                </ul>

            </div>

            <hr style={{ border: '1px solid gray' }} />


            {/* <Link to={`/paymentSuccess`}>
                <button className='btn px-2 w-full rounded-md'>Make Payment</button>
            </Link> */}
        </div>
    )
}

export default PaymentPageSidePanel