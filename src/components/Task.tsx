import { Trash } from "@phosphor-icons/react";
import { Checkbox } from "@/components/ui/checkbox"

interface TaskProps {
    content: string
}

export function Task(props: TaskProps) {
    return (
        <div className="w-3/4 mx-auto h-14 flex gap-3 border border-black rounded-3xl px-3 my-4">
            <button className="-mt-3.5"><Trash className="h-7 w-7 mt-3 hover:fill-gray-900" /></button>
            {/*<input type="checkbox" className="size-5 mt-4 border  before:bg-white before:outline-slate-950 " />*/}
            {/*<Checkbox variant="surface" size="3" defaultChecked />*/}
            <Checkbox className="mt-4 h-5 w-5 border-2 " />
            <div className="border border-black" />
            <p className=" mt-2.5 text-2xl">{props.content}</p>

        </div>
    )
}