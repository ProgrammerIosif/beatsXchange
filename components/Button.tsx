'use client'

import { useTransition } from "react"

export default function Button({onClick, params, content}: {onClick: Function, params: any, content: string}) {
  let [isPending, startTransition] = useTransition()
  return <button onClick={() => startTransition(() => onClick(params))} className="active:bg-black/30">{content}</button>
}
