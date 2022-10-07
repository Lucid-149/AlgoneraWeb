import React from 'react'
import PropTypes from 'prop-types'

function Service(props) {
  return (
    <div className=' max-w-md hover:gap-24  m-4 rounded-sm border border-secondary hover:rounded-md flex flex-col justify-evenly items-center gap-20 py-10 cursor-pointer hover:bg-teal-900 ease-in-out duration-500'>
        <div className=''> 
<object className='hover:rotate-12 ease-in-out duration-500' data={props.img} type='image/svg+xml'></object>
        </div>
        <div className='px-10 text-center'>
            <h3 className='text-6xl font-bold mb-5'>{props.title}</h3>
            <p className='text-lg text-center font-thin'>{props.description}</p>
            </div>
    </div>
  )
}

Service.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default Service
