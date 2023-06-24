'use client'

import { useTransition } from "react"

export default function Button({
  onClick, params, content, style, disabled = false
}: {
  onClick: Function, params: any, content: string, style?: string, disabled?: boolean
}) {
  let [isPending, startTransition] = useTransition()
  return <button onClick={() => startTransition(() => onClick(params))} disabled={disabled} className={`disabled:cursor-not-allowed active:bg-black/30 text-center ${style}`}>{content}</button>
}
