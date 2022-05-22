import { ChatTeardropDots } from "phosphor-react"
import {useState} from "react"
 
export function Widget(){
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  function toggleWidgetVisibility(){
    setIsWidgetOpen(!isWidgetOpen)
  }

  return (
    <div className="widget-container">
      {isWidgetOpen && <p>Widget</p>}

      <button className="widget-button" onClick={toggleWidgetVisibility}>
        <ChatTeardropDots className="widget-icon" />

        <span className="widget-button__content">Feedback</span>
      </button>
    </div>
  )
}