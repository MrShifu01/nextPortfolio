import Link from 'next/link'
import Layout from '../components/Layout'

const index = () => {
  return (
    <Layout>
      <div className='index-container'>
        <div>
          <h2 style={{ opacity: 0.4 }}>UI/UX Design</h2>
          <h2 style={{ opacity: 0.6 }}>Frontend Development</h2>
          <h1 style={{color: 'white', fontSize: "3rem"}}><strong>Christian Stander</strong></h1>
          <h2 style={{ opacity: 0.6 }}>Backend Development</h2>
          <h2 style={{ opacity: 0.55 }}>HTML & CSS</h2>
          <h2 style={{ opacity: 0.5 }}>JavaScript</h2>
          <h2 style={{ opacity: 0.45 }}>React</h2>
          <h2 style={{ opacity: 0.4 }}>Express</h2>
          <h2 style={{ opacity: 0.35 }}>MongoDB</h2>
          <h2 style={{ opacity: 0.3 }}>Node js</h2>
          <h2 style={{ opacity: 0.25 }}>Next JS</h2>
        </div>
        <div></div>
        <div>
          <img className='bamboo' src='/static/bamboo.png' alt='bamboo tree'/>
        </div>
      </div>
      

       <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

          .index-container {
            display:flex;
            justify-content: space-between;
          }

          .bamboo {
            width: 200px;
            transform: translate(-50%, 8.9%);
            -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0), rgba(0,0,0,0));
          }

          h2, h1 {
            font-family: "Oswald", sans-serif;
            text-transform: uppercase;
          }

          h2 {
            margin: 5px;
          }

          h1 {
            -webkit-animation: text-flicker-in-glow 4s ease-in 1s both;
            animation: text-flicker-in-glow 4s ease-in 1s both;
          }

          @-webkit-keyframes text-flicker-in-glow {
            0% {
              opacity: 0;
            }
            10% {
              opacity: 0;
              text-shadow: none;
            }
            10.1% {
              opacity: 1;
              text-shadow: none;
            }
            10.2% {
              opacity: 0;
              text-shadow: none;
            }
            20% {
              opacity: 0;
              text-shadow: none;
            }
            20.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
            }
            20.6% {
              opacity: 0;
              text-shadow: none;
            }
            30% {
              opacity: 0;
              text-shadow: none;
            }
            30.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            30.5% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            30.6% {
              opacity: 0;
              text-shadow: none;
            }
            45% {
              opacity: 0;
              text-shadow: none;
            }
            45.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            50% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            55% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            55.1% {
              opacity: 0;
              text-shadow: none;
            }
            57% {
              opacity: 0;
              text-shadow: none;
            }
            57.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
            }
            60% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
            }
            60.1% {
              opacity: 0;
              text-shadow: none;
            }
            65% {
              opacity: 0;
              text-shadow: none;
            }
            65.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            75% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            75.1% {
              opacity: 0;
              text-shadow: none;
            }
            77% {
              opacity: 0;
              text-shadow: none;
            }
            77.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            85% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            85.1% {
              opacity: 0;
              text-shadow: none;
            }
            86% {
              opacity: 0;
              text-shadow: none;
            }
            86.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            100% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
            }
          }
          @-webkit-keyframes text-flicker-in-glow {
            0% {
              opacity: 0;
            }
            10% {
              opacity: 0;
              text-shadow: none;
            }
            10.1% {
              opacity: 1;
              text-shadow: none;
            }
            10.2% {
              opacity: 0;
              text-shadow: none;
            }
            20% {
              opacity: 0;
              text-shadow: none;
            }
            20.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
            }
            20.6% {
              opacity: 0;
              text-shadow: none;
            }
            30% {
              opacity: 0;
              text-shadow: none;
            }
            30.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            30.5% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            30.6% {
              opacity: 0;
              text-shadow: none;
            }
            45% {
              opacity: 0;
              text-shadow: none;
            }
            45.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            50% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            55% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            55.1% {
              opacity: 0;
              text-shadow: none;
            }
            57% {
              opacity: 0;
              text-shadow: none;
            }
            57.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
            }
            60% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
            }
            60.1% {
              opacity: 0;
              text-shadow: none;
            }
            65% {
              opacity: 0;
              text-shadow: none;
            }
            65.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            75% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            75.1% {
              opacity: 0;
              text-shadow: none;
            }
            77% {
              opacity: 0;
              text-shadow: none;
            }
            77.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            85% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            85.1% {
              opacity: 0;
              text-shadow: none;
            }
            86% {
              opacity: 0;
              text-shadow: none;
            }
            86.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            100% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
            }
          }
          @keyframes text-flicker-in-glow {
            0% {
              opacity: 0;
            }
            10% {
              opacity: 0;
              text-shadow: none;
            }
            10.1% {
              opacity: 1;
              text-shadow: none;
            }
            10.2% {
              opacity: 0;
              text-shadow: none;
            }
            20% {
              opacity: 0;
              text-shadow: none;
            }
            20.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
            }
            20.6% {
              opacity: 0;
              text-shadow: none;
            }
            30% {
              opacity: 0;
              text-shadow: none;
            }
            30.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            30.5% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            30.6% {
              opacity: 0;
              text-shadow: none;
            }
            45% {
              opacity: 0;
              text-shadow: none;
            }
            45.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            50% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            55% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
            }
            55.1% {
              opacity: 0;
              text-shadow: none;
            }
            57% {
              opacity: 0;
              text-shadow: none;
            }
            57.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
            }
            60% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
            }
            60.1% {
              opacity: 0;
              text-shadow: none;
            }
            65% {
              opacity: 0;
              text-shadow: none;
            }
            65.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            75% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            75.1% {
              opacity: 0;
              text-shadow: none;
            }
            77% {
              opacity: 0;
              text-shadow: none;
            }
            77.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            85% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            85.1% {
              opacity: 0;
              text-shadow: none;
            }
            86% {
              opacity: 0;
              text-shadow: none;
            }
            86.1% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
            }
            100% {
              opacity: 1;
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
            }
          }

          
       `}</style>
    </Layout>
  )
}

export default index