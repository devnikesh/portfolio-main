// components/ProgressBanner.js
import React from 'react'

const ProgressBanner = () => {
  return (
    <div
      style={{
        background: '#FEFCE8',
        textAlign: 'center',
        zIndex: 1,
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
