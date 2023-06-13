import { auth } from "@clerk/nextjs"
import { CartItem, Product} from '@prisma/client'
import { prisma } from "@/prisma/client"
import Button from "@/components/Button"
import { removeAllCartItems } from "@/app/serverActions"

async function getCartItems(userId: string) {
  const cartItems: CartItem[] = await prisma.cartItem.findMany({
    where: {
      userId: userId
    }
  })
  const products: Product[] = await prisma.product.findMany()
  const items = cartItems.map(item => {
    return {
      product: products.find((product) => item.productId === product.id),
      quantity: item.quantity
    }
  })
  return items.filter(item => item.product) as {product: Product, quantity: number}[]
}

export default async function Page() {
  const {userId} = auth();
  if (userId === null) return
  const items = await getCartItems(userId)
  return (
    <div>
      {items.map(item =>
          <div className='bg-white border border-black/10 p-2 text-black'>
            <img src={item.product.image} />
            <p className='text-gray-600'>{item.product.brand}</p>
            <p className='font-semibold text-lg'>{item.product.name}</p>
            <p>quantity:{item.quantity}</p>
            <p>${item.product.price}</p>
          </div>)}
      <Button onClick={removeAllCartItems} params={userId} content='Reset Cart'/>
    </div>
  )
}
