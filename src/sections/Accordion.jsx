import { useState } from "react"
import { AccordionData } from "./AccordionData"



function Accordion() {
  const [openId, setOpenId] = useState(null)

  function handleToggle(id){
    setOpenId(openId== id ? null : id)
    
  }



  return (
    <section>
      <div className="w-4/5 grid grid-cols-2 gap-4"> 
        { AccordionData.map((item) => {
          return(
            <div key={item.id} className="border-b border-gray-500 text-white spacey-3">
              <div className="flex justify-between text-2xl cursor-pointer" onClick={() => (handleToggle(item.id))}>
                <h2>{item.title}</h2>
                <span>{openId == item.id ? "-" : '+'}</span>
              </div>
              
              
              { openId == item.id ?
                (<div>
                {item.description}
              </div>) : null}

            </div>
          )
        })

        }
      </div>

    </section>
  );
}

export default Accordion