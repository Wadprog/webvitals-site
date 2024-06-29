import React from 'react'

const CarouselSlider = (props: { limit: number; current: number }) => {
  return (
    <div>
      <p>01</p>
      <input type="range" min="1" max={props.limit} value={props.current} title="carousel_range"/>
      <p>{`${props.limit < 9 && '0'}${props.limit}`}</p>
    </div>
  )
}

export default CarouselSlider
