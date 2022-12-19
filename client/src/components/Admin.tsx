import { Cert } from './Cert';
import React from 'react'
import pic from '../assets/default1.png';
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

function Admin() {
    const navigate = useNavigate();
    
    return (
        <div className='h-screen'>
            <nav className='flex justify-start p-5'>
                <button onClick={() => navigate('/')}>
                    <BsArrowLeft />
                </button>
            </nav>
            <div className='flex justify-center flex-row items-center h-[80%]'>
                <div className='flex justify-center w-1/2'>
                    <form className='flex justify-center flex-col shadow-2xl p-4 w-3/4' action="">
                        <input className='form__input' type="text" placeholder='Record serial number' />
                        <div className='flex h-40 w-auto p-2'>
                            <div className='flex justify-center items-center h-full border-2 border-dashed w-40'>
                                +image preview
                            </div>
                            {/* <img className='object-cover h-full' src={pic} alt="" /> */}
                        </div>
                        <input className='form_input cursor-pointer py-2' type="file" />
                        <button className='flex justify-center'>Upload record</button>
                    </form>
                </div>
                <div className='w-1/2 h-full'>
                    <h1 className='font-bold'>All Records</h1>
                    <div className='flex flex-row flex-wrap gap-3 overflow-y-auto h-[80%]'>
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                        <Cert pic={pic} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin