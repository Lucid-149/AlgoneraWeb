import React from 'react'
import PropTypes from 'prop-types'

function Product(props) {
  return (
    <div className=' w-full h-full flex items-center justify-center gap-20 flex-wrap'>
        <div className='w-1/2'>
            <object className=' w-1/2' data={props.img}></object>
        </div>
        <div className='max-w-lg'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        </div>

    </div>
  )
}

Product.propTypes = {}

export default Product
