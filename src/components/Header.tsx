/*import { Moon } from "@phosphor-icons/react";*/

import { toast } from "sonner"

function createTask() {

    toast.success("Tarefa criada com sucesso!")
}

export function Header() {
    return (
        <div className="my-10 mx-15x flex-1 grid grid-cols-1">
            < div className="mx-auto" >
                <h1 className="text-3xl">Lista de Tarefas</h1>
                {/*<Moon className="h-5 w-5 my-[4px] flex-" />*/}
            </div >
            <div className="w-3/4 mx-auto py-8 flex gap-3">
                <button onClick={createTask} className="h-14 w-14 border text-3xl border-black rounded-full hover:bg-gray-100 hover:delay-50">+</button>
                <input type="text" placeholder="Digite uma nova tarefa" className="border flex-1 border-black rounded-3xl resize-none text-2xl px-4 focus:outline-none"></input>
            </div>

            <div className="border border-black w-3/4 mx-auto my-4" />


        </div >
    )
}