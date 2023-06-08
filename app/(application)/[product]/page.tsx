import { Product } from "@prisma/client"
import prisma from "@/prisma/client"

async function getProduct(productId: string) {
  return prisma.product.findUnique({
  where: {
    id: productId,
  }}).then(result => {
    return result
   }).catch(() => {
    return null})
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
        </div>
    </div>
  )
}

