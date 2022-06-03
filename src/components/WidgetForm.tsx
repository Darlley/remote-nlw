export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-2 flex flex-col gap-4 items-center shadow-lg w-[calc(100vw-2rem)] md:w-80 text-white">
            <header className="flex justify-center">
                <span className="text-xm">Deixe seu feedback</span>
            </header>
            <main className="flex gap-2 w-full">
                <div className="hover:bg-zinc-700 hover:cursor-pointer bg-zinc-800 rounded-2xl w-1/3 h-24 flex flex-col justify-center items-center">
                    Problema
                </div>
                <div className="bg-zinc-800 rounded-2xl w-1/3 h-24 flex flex-col justify-center items-center">
                    Ideia
                </div>
                <div className="bg-zinc-800 rounded-2xl w-1/3 h-24 flex flex-col justify-center items-center">
                    Outro
                </div>
            </main>
            <footer>
                <span className="text-sm">Feito com 💜 pelo <a className="text-indigo-500 underline" href="/">Darlley</a></span>
            </footer>
        </div>
    )
}