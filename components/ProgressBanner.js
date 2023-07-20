// components/ProgressBanner.js
import React from 'react'

const ProgressBanner = () => {
  return (
    <div
      style={{
        background: '#FEFCE8',
        // padding: '1px',
        textAlign: 'center',
        // color: '#FFFFFF',
        fontSize: '11px',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '18px',
        lineHeight: '15px'
      }}
    >
      ⚠️ Site is under construction.
    </div>
  )
}

export default ProgressBanner
