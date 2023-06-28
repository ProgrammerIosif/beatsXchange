import { Product } from "@prisma/client"
import { getProduct, addProductToCart } from "@/app/serverActions"
import { auth } from "@clerk/nextjs"

export default async function Page({params}: { params: { product: string } }) {
  const {userId} = auth()
  const product: Product | null = await getProduct(params.product)
  return product === null || userId === null ? (
    <div>
      Page not found
    </div>
  ) : (
    <div>
        <div className='bg-white text-black p-2 lg:grid lg:grid-cols-2 lg:gap-32 max-w-7xl lg:mx-auto'>
          <img className="max-w-2xl" src={product.image} />
          <div className="flex flex-col justify-center">
            <p className='text-gray-600 font-bold text-3xl'>{product.brand}</p>
            <p className='font-semibold text-5xl'>{product.name}</p>
            <p className="text-xl">${product.price}</p>
            <form action={addProductToCart}>
              <input type="number" min={1} name="quantity" defaultValue='1'/>
              <input className="hidden" type="text" name="productId" defaultValue={product.id}/>
              <input className="hidden" type="text" name="userId" defaultValue={userId}/>
              <button type="submit">Add to cart</button>
            </form>
          </div>
        </div>
    </div>
  )
}

