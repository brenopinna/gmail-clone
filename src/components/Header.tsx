import { List, Envelope, Question, Gear, DotsNine } from "@phosphor-icons/react"

export function Header() {
  return (
    <header className="px-3 py-2 flex items-center">
      <span
        className={`w-11 h-11 rounded-full hover:bg-neutral-200 p-1 grid place-items-center mr-3`}>
        <List size={24} className="text-gray-900 cursor-pointer" />
      </span>
      <div className="flex justify-between w-full">
        <a
          href="#"
          title="Gmail"
          className="text-gray-900 text-2xl flex items-center gap-2">
          <Envelope size={40} />
          <span>Gmail</span>
        </a>
        <div className="flex gap-1 items-center">
          <span
            className={`w-10 h-10 rounded-full hover:bg-neutral-200 p-1 grid place-items-center`}>
            <Question size={24} />
          </span>
          <span
            className={`w-10 h-10 rounded-full hover:bg-neutral-200 p-1 grid place-items-center`}>
            <Gear size={24} />
          </span>
          <span
            className={`w-10 h-10 rounded-full hover:bg-neutral-200 p-1 grid place-items-center`}>
            <DotsNine size={24} />
          </span>
          <img
            className={`w-10 h-10 rounded-full hover:bg-neutral-200 p-1 cursor-pointer`}
            src="https://lh3.googleusercontent.com/ogw/AOLn63FxotCz46B3h6xv4fnx8uZ2HQ1wKOvXJq3IGoPq=s32-c-mo"
            alt="Google's User Icon"
          />
        </div>
      </div>
    </header>
  )
}
