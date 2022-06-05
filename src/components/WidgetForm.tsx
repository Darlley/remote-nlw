import { CloseButton } from "./CloseButton"

interface ToggleProps {
    handleClickChildren: () => void
}

export function WidgetForm({handleClickChildren}: ToggleProps) {
    return (
        <div className="relative bg-zinc-900 p-4 rounded-2xl mb-2 flex flex-col gap-4 items-center shadow-lg w-[calc(100vw-2rem)] md:w-80 text-white">
            
            <CloseButton handleClickChildren={handleClickChildren} />

            <header className="flex justify-center">
                <span className="text-xm leading-6">Deixe seu feedback</span>
            </header>
            <main className="flex gap-2 w-full">
                <div className="hover:bg-zinc-700 transition-colors hover:cursor-pointer bg-zinc-800 rounded-2xl w-1/3 h-24 flex flex-col justify-center items-center">
                    Problema
                </div>
                <div className="hover:bg-zinc-700 transition-colors hover:cursor-pointer bg-zinc-800 rounded-2xl w-1/3 h-24 flex flex-col justify-center items-center">
                    Ideia
                </div>
                <div className="hover:bg-zinc-700 transition-colors hover:cursor-pointer bg-zinc-800 rounded-2xl w-1/3 h-24 flex flex-col justify-center items-center">
                    Outro
                </div>
            </main>
            <footer>
                <span className="text-xs text-neutral-400">Feito com 💜 pelo <a className="text-purple-500 hover:text-purple-600 font-bold underline underline-offset-1" href="/">Darlley</a></span>
            </footer>
        </div>
    )
}