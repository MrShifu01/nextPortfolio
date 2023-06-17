import Link from "next/link"

const Header = () => {
  return (
    <div>

            <nav>
              <h2>
                <Link href="/">portfol.io</Link>
              </h2>
              <ul>
                <li><Link href="/about">about</Link></li>
                <li><Link href="/projects">projects</Link></li>
                <li><Link href="/contact">contact</Link></li>
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
          `}</style> 
    </div>
  )
}

export default Header