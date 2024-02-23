import { Trash } from "@phosphor-icons/react";
import { Checkbox } from "@radix-ui/themes";

import '@radix-ui/themes/styles.css'


export function TODO() {
    return (
        <div className="w-3/4 mx-auto h-14 flex gap-4 border border-black rounded-3xl px-3">
            <Trash className="h-7 w-7 mt-3" />
            {/*<input type="checkbox" className="size-5 mt-4 border  before:bg-white before:outline-slate-950 " />*/}
            <Checkbox variant="surface" size="3" />
            <div className="border border-black" />
            <p className="resize-none mt-2.5 text-2xl"></p>
        </div>
    )
}