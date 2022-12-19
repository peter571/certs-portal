import React from "react";

interface PropCert {
    pic: string;
}

export function Cert({
    pic
}: PropCert) {
    return <div className='h-40 w-32'>
        <img className='object-cover h-full' src={pic} alt="cert" />
    </div>;
}
