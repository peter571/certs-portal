import React, { useRef, useState } from "react";
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import pic from '../assets/default1.png';

function Home() {
    const [cert, setCert] = useState(false);
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSearch = () => {
        console.log(inputRef.current?.value)
    }

    return <div className="">
        <nav className='flex justify-end p-5'>
            <button onClick={() => navigate('/admin')}>
                Admin <BsArrowRight />
            </button>
        </nav>
        <div className='flex justify-center gap-4'>
            <input ref={inputRef} className='form__input' type="text" placeholder='Enter certificate serial number...' required />
            <button onClick={handleSearch}>search</button>
        </div>
        <div className='flex justify-center p-5 h-[420px]'>
            {cert ? <div className='flex justify-center'>
                <img className='h-96 w-72' src={pic} alt="cert" />
            </div> : <h1>Certificate number 12345 does not exist</h1>}
        </div>
    </div>;
}
export default Home