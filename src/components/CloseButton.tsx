import { Popover } from '@headlessui/react'
import { X } from "phosphor-react"

interface ToggleProps {
  handleClickChildren: () => void
}

export function CloseButton({handleClickChildren}:ToggleProps){
  return (
    <Popover.Button onClick={handleClickChildren} className="text-white">

      <X className="absolute right-4 top-4 hover:bg-zinc-800 p-1 h-6 w-6 rounded-full scale-90 hover:scale-110" />

    </Popover.Button>
  )
}