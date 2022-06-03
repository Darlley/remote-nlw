import { ChatTeardropDots } from "phosphor-react"
import { Popover } from '@headlessui/react'
import { WidgetForm } from "./WidgetForm"

export function Widget(){

  return (
    <Popover className="widget-container relative border">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="widget-button overflow-hidden group">
        <ChatTeardropDots className="widget-icon" />

        <span className="text-xl max-w-0 flex group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-3"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}