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
        
        <div className='buttons-container'>
          <img className='arrow' src='/static/arrow.svg' alt='arrow'/>
          <Link href='/projects'><button className='projects-button'>Projects</button></Link>
        </div>
        <div>
          <img className='bamboo' src='/static/bamboo.png' alt='bamboo tree'/>

        </div>
      </div>
  
      
      

       <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

          .index-container {
            display:grid;
            grid-template-columns: repeat(3, 1fr);
            justify-content: space-between;
          }

          .buttons-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: end;
            align-items: center;
            margin-bottom: 3rem;
          }

          .arrow {
            width: 10px;
            opacity: 0.6;
            -webkit-animation: bounce-in-top 2s 5s both;
            animation: bounce-in-top 2s 5s both;
          }

          @-webkit-keyframes bounce-in-top {
            0% {
              -webkit-transform: translateY(-500px);
                      transform: translateY(-500px);
              -webkit-animation-timing-function: ease-in;
                      animation-timing-function: ease-in;
              opacity: 0;
            }
            38% {
              -webkit-transform: translateY(0);
                      transform: translateY(0);
              -webkit-animation-timing-function: ease-out;
                      animation-timing-function: ease-out;
              opacity: 1;
            }
            55% {
              -webkit-transform: translateY(-65px);
                      transform: translateY(-65px);
              -webkit-animation-timing-function: ease-in;
                      animation-timing-function: ease-in;
            }
            72% {
              -webkit-transform: translateY(0);
                      transform: translateY(0);
              -webkit-animation-timing-function: ease-out;
                      animation-timing-function: ease-out;
            }
            81% {
              -webkit-transform: translateY(-28px);
                      transform: translateY(-28px);
              -webkit-animation-timing-function: ease-in;
                      animation-timing-function: ease-in;
            }
            90% {
              -webkit-transform: translateY(0);
                      transform: translateY(0);
              -webkit-animation-timing-function: ease-out;
                      animation-timing-function: ease-out;
            }
            95% {
              -webkit-transform: translateY(-8px);
                      transform: translateY(-8px);
              -webkit-animation-timing-function: ease-in;
                      animation-timing-function: ease-in;
            }
            100% {
              -webkit-transform: translateY(0);
                      transform: translateY(0);
              -webkit-animation-timing-function: ease-out;
                      animation-timing-function: ease-out;
            }
          }
          @keyframes bounce-in-top {
            0% {
              -webkit-transform: translateY(-500px);
                      transform: translateY(-500px);
              -webkit-animation-timing-function: ease-in;
                      animation-timing-function: ease-in;
              opacity: 0;
            }
            38% {
              -webkit-transform: translateY(0);
                      transform: translateY(0);
              -webkit-animation-timing-function: ease-out;
                      animation-timing-function: ease-out;
              opacity: 1;
            }
            55% {
              -webkit-transform: translateY(-65px);
                      transform: translateY(-65px);
              -webkit-animation-timing-function: ease-in;
                      animation-timing-function: ease-in;
            }
            72% {
              -webkit-transform: translateY(0);
                      transform: translateY(0);
              -webkit-animation-timing-function: ease-out;
                      animation-timing-function: ease-out;
            }
            81% {
              -webkit-transform: translateY(-28px);
                      transform: translateY(-28px);
              -webkit-animation-timing-function: ease-in;
                      animation-timing-function: ease-in;
            }
            90% {
              -webkit-transform: translateY(0);
                      transform: translateY(0);
              -webkit-animation-timing-function: ease-out;
                      animation-timing-function: ease-out;
            }
            95% {
              -webkit-transform: translateY(-8px);
                      transform: translateY(-8px);
              -webkit-animation-timing-function: ease-in;
                      animation-timing-function: ease-in;
            }
            100% {
              -webkit-transform: translateY(0);
                      transform: translateY(0);
              -webkit-animation-timing-function: ease-out;
                      animation-timing-function: ease-out;
            }
          }

          .bamboo {
            width: 200px;
            transform: translate(90%, 8.9%);
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

          .projects-button {
            background-color:#3C4F38;
            color: rgba(255,255,255,0.7);
            font-size: 1.5rem;
            padding: 0 1rem;
            height: 60px;
            width: 150px;
            border-color: rgba(255,255,255,0.5);
            border-radius: 25px;
            box-shadow: 0 0 20px 10px;
            opacity: 0.9;
            outline:none;
          }

          .projects-button:hover {
            font-size:1.6rem;
            height: 63px;
            width: 160px;
            opacity: 1;
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