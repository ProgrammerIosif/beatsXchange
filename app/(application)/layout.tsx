import Nav from "@/components/Nav"
import { getCartItems } from "@/app/serverActions"
import { auth } from "@clerk/nextjs"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const {userId} = auth()
  if (userId === null)
    return (
    <>
      <Nav/>
      {children}
    </>
  )
  const cartNumber = await getCartItems(userId).then(items => items.length)
  return (
    <>
      <Nav cartBadge={cartNumber}/>
      {children}
    </>
  )
}
