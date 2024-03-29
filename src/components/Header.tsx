/*import { Moon } from "@phosphor-icons/react";*/

import { useState } from "react"
import { toast } from "sonner"
import { Task } from "./Task"

export function Header() {
    const [newTask, setNewTask] = useState('')

    const [tasks, setTasks] = useState([
        'Tarefa Teste',
    ])

    function createNewTask() {
        setTasks([newTask, ...tasks])
        setNewTask('')

        toast.success("Tarefa criada com sucesso!")
    }

    return (
        <div className="my-10 mx-15x flex-1 grid grid-cols-1">
            < div className="mx-auto" >
                <h1 className="text-3xl">Lista de Tarefas</h1>
                {/*<Moon className="h-5 w-5 my-[4px] flex-" />*/}
            </div >
            <div className="w-3/4 mx-auto py-8 flex gap-3">
                <button onClick={createNewTask} className="h-14 w-14 border text-3xl border-black rounded-full hover:bg-gray-100 hover:delay-50">+</button>

                <textarea
                    placeholder="Digite uma nova tarefa"
                    onChange={(event) => { /* entender o que o User está digitando enquanto ele digita */
                        setNewTask(event.target.value)
                    }}
                    className="border flex-1 border-black rounded-3xl resize-none text-2xl px-4 focus:outline-none h-14 pt-2">
                </textarea>
            </div>

            <div className="border border-black w-3/4 mx-auto my-4 mb-8" />

            {tasks.map(tasks => {
                return (
                    <Task key={tasks} content={tasks} /> /*Key - Permite que o React tenha um desempenho melhor em relação ao controle de elementos, pois ele vai ter um identificador para saber se algo foi alterado, deletado, etc... facilitando e deixando mais leve a aplicação */
                )
            })}

        </div >
    )
}