import { useState } from "react"
import { EmailPreview } from "./EmailPreview"

export function Main() {
  const [selected, setSelected] = useState(0)
  return (
    <main className="bg-white rounded-3xl pb-2 mr-2 flex flex-col overflow-hidden">
      <p className="font-bold text-lg px-8 py-4 my-4">
        {selected > 0 ? `Emails selecionados: ${selected}` : "Caixa de Entrada"}
      </p>
      <div className="border-b border-t relative  flex-grow overflow-auto">
        <div className="absolute w-full h-full">
          {new Array(49).fill("").map((_, i) => (
            <EmailPreview id={i} selected={selected} key={i} setSelected={setSelected} />
          ))}
        </div>
      </div>
    </main>
  )
}
