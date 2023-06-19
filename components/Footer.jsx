import React from 'react'

// Basisc Footer
// Styled to be at the bottom in the middle
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
                    margin-top: 2rem;
                }
            `}
        </style>
    </div>
  )
}

export default Footer