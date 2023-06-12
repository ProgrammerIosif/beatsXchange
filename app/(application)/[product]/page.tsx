import { Product } from "@prisma/client"
import { prisma } from "@/prisma/client"
import { auth } from "@clerk/nextjs"
import Button from "@/components/Button"
import { revalidatePath } from "next/cache"

async function getProduct(productId: string) {
  return prisma.product.findUnique({
  where: {
    id: productId,
  }}).then(result => {
    return result
   }).catch(() => {
    return null})
}

async function addProductToCart(productId: string): Promise<void> {
  'use server'
  const {userId} = auth();
  if (userId == null) return
  const itemExists = await prisma.cartItem.findFirst({
    where: {
      productId: productId,
      userId: userId
    },
  }) !== null

  itemExists ?
    console.log('product in cart') :
    await prisma.cartItem.create({
      data: {
        userId: userId,
        productId: productId,
        quantity: 1
      }
    })
  revalidatePath('/cart')
}

export default async function Page({params}: { params: { product: string } }) {
  const product: Product | null = await getProduct(params.product)
  return product === null ? (
    <div>
      Page not found
    </div>
  ) : (
    <div>
        <div className='bg-white text-black border border-black/10 p-2'>
          <img src={product.image} />
          <p className='text-gray-600'>{product.brand}</p>
          <p className='font-semibold text-lg'>{product.name}</p>
          <p>${product.price}</p>
          <Button onClick={addProductToCart} params={product.id} content='Add to cart'/>
        </div>
    </div>
  )
}

