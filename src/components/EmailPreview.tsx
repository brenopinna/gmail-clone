import { Star } from "@phosphor-icons/react"
import { Dispatch, SetStateAction, useState } from "react"

interface EmailPreviewProps {
  id: number
  selected: number
  setSelected: Dispatch<SetStateAction<number>>
}

export function EmailPreview({ id, selected, setSelected }: EmailPreviewProps) {
  const [isChecked, setIsChecked] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div
      className={`flex w-full justify-between border-t px-4 py-2 ${
        isChecked && "bg-email-checked"
      }`}>
      <span className="flex items-center gap-4">
        <input
          type="checkbox"
          className="cursor-pointer"
          onChange={() => {
            setIsChecked(!isChecked)
            isChecked ? setSelected(selected - 1) : setSelected(selected + 1)
          }}
        />
        <input
          type="checkbox"
          id={`star-${id}`}
          className="hidden"
          onChange={() => setIsFavorite(!isFavorite)}
        />
        <label htmlFor={`star-${id}`} className="cursor-pointer">
          <Star
            className={`${
              isFavorite ? (isChecked ? "text-yellow-500" : "text-yellow-300") : ""
            }`}
          />
        </label>
        <span className="font-bold">JOHN DOE</span>
      </span>
      <p className="flex gap-1">
        <span className="text-bold">Vercel June Update</span>-
        <span className="text-neutral-400">Description words blablabla</span>
      </p>
      <span className="text-bold">29 de jun.</span>
    </div>
  )
}
