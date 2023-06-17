import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()

  return (
    <div>
        <h6>portfol.io &copy; {date}</h6>
        <style jsx>
            {`
                h6 {
                    font-size: 1rem;
                    opacity: 0.5;
                    text-align: center;
                }
            `}
        </style>
    </div>
  )
}

export default Footer