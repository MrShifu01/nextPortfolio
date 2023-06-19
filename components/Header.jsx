import Link from "next/link"
import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()

  return (
    <div>

            <nav>
              <h2>
                <Link href="/">portfol.io</Link>
              </h2>
              <ul>
              <Link href="/about"><li style={{color: router.route === '/about' ? "#3C4F38" : "black"}}>About</li></Link>
              <Link href="/projects"><li style={{color: router.route === '/projects' ? "#3C4F38" : "black"}}>Projects</li></Link>
              <Link href="/contact"><li style={{color: router.route === '/contact' ? "#3C4F38" : "black"}}>Contact</li></Link>
              <Link href="https://interactive-cv-mrshifu01.vercel.app/" target="_blank"><button className="cv-button">CV</button></Link>

              </ul>
            </nav>


          <style jsx global>{`

            nav {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 1rem;
              opacity: 0.7;
            }

            ul {
              display: flex;
              margin-top: 10px;
              gap: 1rem;
            }
            
            li {
              list-style-type: none;
            }

            a {
              text-decoration: none;
              color: #fff;
            }

            a:hover{
              text-decoration: none;
              color: #000;
              opacity: 0.6
            }

            .cv-button {
              background-color:#3C4F38;
              color: rgba(255,255,255,0.7);
              padding: 0 1rem;
              border-color: rgba(255,255,255,0.5);
              border-radius: 25px;
              box-shadow: 0 0 20px 10px;
              opacity: 0.9;
              outline:none;
            }
  
            .cv-button:hover {
              opacity: 1;
            }

          `}</style> 
    </div>
  )
}

export default Header