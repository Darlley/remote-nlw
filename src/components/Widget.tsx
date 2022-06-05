import { ChatTeardropDots } from "phosphor-react"
import { Popover } from '@headlessui/react'
import { WidgetForm } from "./WidgetForm"
import { useState } from "react"

export function Widget(){

  const [toggle, setToggle] = useState(false)

  function handleClick(){
    setToggle(!toggle)
  }

  return (
    <Popover className="widget-container relative">
      <Popover.Panel>
        <WidgetForm handleClickChildren={handleClick} />
      </Popover.Panel>

      <Popover.Button onClick={handleClick} className="widget-button overflow-hidden">
        
        <ChatTeardropDots className="widget-icon" />
        
        <span className={`${toggle ? "button-span active" : "button-span"}`}>
          <span className="pl-3" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}