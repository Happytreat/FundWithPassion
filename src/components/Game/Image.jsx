import React from 'react'

export const Image = (link) => {
  return (
    <div style={{display: 'inline'}}>
      <img src={link.link} alt="Robos" />
      {link.link.split('/')[3]}
    </div>
  )
};