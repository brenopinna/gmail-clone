import {
  PencilSimple,
  Tray,
  Star,
  CaretDown,
  Clock,
  PaperPlaneRight,
  Plus,
  WarningOctagon,
  File,
} from "@phosphor-icons/react"

export function SideIcons() {
  return (
    <aside className=" p-2 flex flex-col items-center h-full">
      <span className="bg-sky-200 rounded-2xl w-14 h-14 grid place-items-center shadow-black hover:shadow-md cursor-pointer mb-4">
        <PencilSimple size={26} />
      </span>
      <span className="bg-indigo-200 w-8 h-8 rounded-full grid place-items-center cursor-pointer relative before:absolute before:w-2.5 before:h-2.5 before:rounded-full before:top-1.5 before:right-1 before:bg-red-500">
        <Tray size={18} />
      </span>
      <span className="hover:bg-slate-200 w-8 h-8 rounded-full grid place-items-center cursor-pointer">
        <Star size={18} />
      </span>
      <span className="hover:bg-slate-200 w-8 h-8 rounded-full grid place-items-center cursor-pointer">
        <Clock size={18} />
      </span>
      <span className="hover:bg-slate-200 w-8 h-8 rounded-full grid place-items-center cursor-pointer">
        <PaperPlaneRight size={18} />
      </span>
      <span className="hover:bg-slate-200 w-8 h-8 rounded-full grid place-items-center cursor-pointer">
        <File size={18} />
      </span>
      <span className="hover:bg-slate-200 w-8 h-8 rounded-full grid place-items-center cursor-pointer">
        <WarningOctagon size={18} />
      </span>
      <span className="hover:bg-slate-200 w-8 h-8 rounded-full grid place-items-center cursor-pointer">
        <CaretDown size={18} />
      </span>
      <span className="hover:bg-slate-200 w-8 h-8 rounded-full grid place-items-center cursor-pointer mt-4">
        <Plus size={18} />
      </span>
    </aside>
  )
}
