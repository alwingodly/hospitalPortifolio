import React from 'react'

const AboutCard = ({about}) => {
    const {name , desc , photo} = about
  return (
    <div className="p-3 lg:p-5 flex flex-col items-center border shadow-md bg-softWhite mb-8">
      <div className='flex items-center justify-center'>
        <img src={photo} className="w-[30%]" alt="" />
      </div>
      <h2 className="text-[16px] leading-[30px] lg:text-[20px] lg:leading-9 text-textColor font-[700] mt-3 lg:mt-5">
        {name}
      </h2>
      <div className="flex items-center justify-between">
        <p className="text-textColor text_para">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default AboutCard