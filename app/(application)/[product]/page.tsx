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
        <div className='bg-white text-black border border-black/10 p-2'>
          <img src={product.image} />
          <p className='text-gray-600'>{product.brand}</p>
          <p className='font-semibold text-lg'>{product.name}</p>
          <p>${product.price}</p>
          <form action={addProductToCart}>
            <input type="number" name="quantity" defaultValue='1'/>
            <input className="hidden" type="text" name="productId" defaultValue={product.id}/>
            <input className="hidden" type="text" name="userId" defaultValue={userId}/>
            <button type="submit">Add to cart</button>
          </form>
        </div>
    </div>
  )
}

