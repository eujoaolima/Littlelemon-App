import {EmptyCartImg} from '../Assets'
import { toast } from 'react-toastify';
import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [chairs, setChairs] = useState('');
    const [selectedOption, setSelectedOption] = useState("option1");
    const [selectedDate, setDate] = useState('');
    const [selectedTime, setSelectedTime] = useState("12:00");

    const submitForm = (e:any) => {
        e.preventDefault()
        if (!name) {
          return alert("Name is required")
        }
        if (!email) {
          return alert("Email is required")
        }
        if (!phone) {
          return alert("Email is required")
        }
        if (!chairs) {
          return alert("Email is required")
        }
        if (!selectedOption) {
          return alert("Email is required")
        }
        if (!selectedDate) {
          return alert("Email is required")
        }
        if (!selectedTime) {
          return alert("Email is required")
        }
    
        return toast.info(`${name} Form handling is not implemented yet`, {
            position: 'top-left',
            autoClose: 3000,
            toastId: 'form'
        })        
    }

    
  return (
    <div className="h-full w-full flex items-center flex-col justify-center px-4 bg-primary">
        <img src={EmptyCartImg} alt="not found" className="w-[30%] h-[30%]" />
      <form action="#" className="mb-6 w-full flex itemx-center justify-center gap-y-3 flex-col">
      <div className="mb-0">
          <input
            type="text"
            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-1">
          <input
            type="email"
            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-1">
          <input
            type="number"
            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
            placeholder="Number of chairs"
            value={chairs}
            onChange={(e) => setChairs(e.target.value)}
            required
          />
        </div>

        <div className='mb-1'>
            <input type="text"
            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
            placeholder='Select date'
            value={selectedDate}
            onChange={e => setDate(e.target.value)} 
            required
            />
        </div>

        <div className='mb-1'>
            <input type="time" 
                className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
                placeholder="Time" 
                value={selectedTime} 
                onChange={e => setSelectedTime(e.target.value)} required
                />
        </div>
       
        <div className="mb-1">
            <select 
                className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
                placeholder="Select the local" 
                value={selectedOption} 
                required
                onChange={e => setSelectedOption(e.target.value)}> 
                    <option value="option1">Outside</option>
                    <option value="option2">Inside</option>
            </select>
        </div>

        <button
          type="submit"
          className="text-white bg-yellow-500 hover:bg-yellow-600 w-full focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-600 focus:outline-none dark:focus:ring-yellow-800 block"
            onClick={submitForm}
        >
          Reserve your table
        </button>
      </form>
      <p className="mb-2 cursor-pointer text-sm text-gray-500 dark:text-gray-400">
        <a href="mailto:littlelemon@support.com" className="hover:underline">
          littlelemon@support.com
        </a>
      </p>
      <p className="text-sm cursor-pointer text-gray-500 dark:text-gray-400">
        <a href="tel:+123456789101" className="hover:underline">
          +123 45 678 9101
        </a>
      </p>
    </div>
  );
};

export default Form;
