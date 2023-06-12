import { auth } from "@clerk/nextjs"
import { CartItem, Product} from '@prisma/client'
import { prisma } from "@/prisma/client"
import Button from "@/components/Button"
import { revalidatePath } from "next/cache"

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

async function removeAllCartItems(userId: string) {
  'use server'
  await prisma.cartItem.deleteMany({
    where: {
      userId: userId
    }
  })
  revalidatePath('/cart')
}

export default async function Page() {
  const {userId} = auth();
  if (userId === null) return
  return (
    <div>
      {getCartItems(userId).then(items => items.map(item =>
          <div className='bg-white border border-black/10 p-2'>
            <img src={item.product.image} />
            <p className='text-gray-600'>{item.product.brand}</p>
            <p className='font-semibold text-lg'>{item.product.name}</p>
            <p>quantity:{item.quantity}</p>
            <p>${item.product.price}</p>
          </div>))}
      <Button onClick={removeAllCartItems} params={userId} content='Reset Cart'/>
    </div>
  )
}
