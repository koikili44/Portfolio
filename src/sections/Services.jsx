import React from 'react'
import Button from'../components/Button'
import {Laptop,Server,Brush,Zap} from 'lucide-react'

const data = [
  {
    id: 1,
    title:"Front-end Developer",
    description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, animi. Consequuntur assu',
    icon: <Laptop/>
  },
  {
    id: 2,
    title:"Back-end Developer",
    description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, animi. Consequuntur assu',
    icon: <Server/>
  },
  {
    id: 3,
    title:"UI/UX Designer",
    description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, animi. Consequuntur assu',
    icon: <Brush/>,
  },
  {
    id: 4,
    title:"Performance Optimization",
    description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, animi. Consequuntur assu',
    icon: <Zap/>
    
  }
]
function Services() {
  return (
    <section className='flex pt-15'>
        <div className='text-white'>
          <h2>My services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dicta, animi. Consequuntur assumenda possimus
             exercitationem! Nobis nihil cupiditate repellat, quidem</p>
                   <Button name="Learn more" background="bg-white px-2 py-1 text-black rounded-sm"/>

</div>
          <div className='text-white pt-30'>
            {data.map ((item)=>{
              return(
                <div key={item.id} className='flex'>
                  <span>{item.icon}</span>
                  <span>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </span>

                </div>
              )
            })}
          </div>
        
    </section>
    
  )
}

export default Services