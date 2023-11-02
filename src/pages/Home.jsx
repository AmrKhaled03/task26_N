import React from 'react'
import Landing from '../components/Landing'
import Items from '../components/Items'
import About from '../components/About'
import Contact from '../components/Contact'


const Home = ({addCart}) => {
  return (
 < div > 

<Landing/>
<About />
<Items addCart={addCart}/>

<Contact />

 </div>
  )
}

export default Home