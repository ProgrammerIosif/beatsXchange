import { Product } from '@prisma/client'
import { prisma } from '@/prisma/client'

async function getProducts() {
  const products: Product[] = await prisma.product.findMany(
    {
      where: { category: "HeadPhones" }
    })
  return products
}

export default async function Page() {
  const products: Product[]  = await getProducts();
  return (
    <div className='bg-white text-black'>
      <div></div>
      <div className='grid gap-5 bg-gray-100 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {products.map(product =>
          <div className='bg-white border border-black/10 p-2'>
            <img src={product.image} />
            <p className='text-gray-600'>{product.brand}</p>
            <p className='font-semibold text-lg'>{product.name}</p>
            <p>${product.price}</p>
          </div>)}
      </div>
    </div>
  )
}
