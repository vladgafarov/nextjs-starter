import { NextPage } from 'next'
import Link from 'next/link'

const About: NextPage = () => {
   return (
      <div className="padding">
         <Link href="/">Main</Link>
         <h1>About Page</h1>
      </div>
   )
}

export default About
