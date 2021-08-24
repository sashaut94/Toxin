import React from 'react'

export const Star = props => {
  return (
    <svg width="20" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
      {
        props.fill || false
          ? <path
            d="M10 15.25L3.812 19l1.641-7.031L.016 7.234l7.171-.609L10 .015l2.813 6.61 7.171.61-5.437 4.734L16.187 19 10 15.25z"
            fill="url(#paint0_linear)"/>
          : <path
            d="M10 13.422l3.75 2.25-.984-4.266L16.094 8.5l-4.407-.375L10 4.094 8.312 8.125 3.907 8.5l3.328 2.906-.984 4.266 3.75-2.25zm9.984-6.188l-5.437 4.735L16.187 19 10 15.25 3.812 19l1.641-7.031L.016 7.234l7.171-.609L10 .015l2.813 6.61 7.171.61z"
            fill="url(#paint0_linear)"/>
      }
      <defs>
        <linearGradient id="paint0_linear" x1="10" y1="-2" x2="10" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BC9CFF"/>
          <stop offset="1" stopColor="#8BA4F9"/>
        </linearGradient>
      </defs>
    </svg>
  )
}