import React from 'react'
import Image from 'next/image'

export default function weather({ data }) {
    console.log(data);
    return (
        <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[80vh] m-auto p-4 text-black z-10'>
            {/* top */}
            <div className='relative flex justify-between pt-12'>
                <div>
                    <Image
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        width={100}
                        height={100}
                        alt=''
                    />
                    <p className='text-2xl'>{data.weather[0].main}</p>
                </div>
                <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>
            </div>
            {/* Bottom */}

            <div className='bg-black/20 relative p-8 rounded-md'>
                <p className='text-2xl text-white text-center pb-6'>Weather in {data.name}</p>
                <div className='flex justify-between text-center text-white'>
                    <div>
                        <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p className='text-xl'>Feels like</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{data.name.humidity}%</p>
                        <p className='text-xl'>Humidity</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)}</p>
                        <p className='text-xl'>Winds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
