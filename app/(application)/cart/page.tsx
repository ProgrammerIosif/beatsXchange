import { auth } from "@clerk/nextjs"
import Button from "@/components/Button"
import { getCartItems, removeAllCartItems, changeCartItemQuantity, removeCartItem } from "@/app/serverActions"
import Link from "next/link";

export default async function Page() {
  const {userId} = auth();
  if (userId === null) return
  const items = await getCartItems(userId)
  return items.length === 0 ? (
    <div className="h-[90vh] flex flex-col items-center justify-center">
      <h1 className="text-6xl text-center pb-2">Your cart is empty</h1>
      <img src='https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?size=626&ext=jpg'/>
    </div>
  ) : (
    <div className="bg-white">
      <h1 className="text-5xl py-8 text-center">YOUR CART</h1>
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex text-lg font-semibold border py-1">
          <p className="w-full text-center">Item</p>
          <p className="w-60 text-center">Price</p>
          <p className="w-60 text-center">Quantity</p>
          <p className="w-60 text-center">Total</p>
        </div>
        {items.map(item =>
            <div className='flex items-center border-x border-b'>
              <div className="w-full flex h-80">
                <Link className="flex h-80" href={"/"+item.product.id}>
                  <img className="" src={item.product.image} />
                </Link>
                <div className="flex flex-col justify-center ml-4">
                  <p className='text-gray-600 text-lg'>{item.product.brand}</p>
                  <p className='font-semibold text-xl'>{item.product.name}</p>
                </div>
              </div>
              <p className="w-60 text-center">${item.product.price}</p>
              <div className="w-60 flex items-center justify-center">
                <div className="flex gap-1 border-black border rounded-lg">
                  <Button disabled={item.quantity === 1} onClick={changeCartItemQuantity} params={{userId: userId, productId: item.product.id, quantity: item.quantity-1}} style="pr-1 pl-2 pb-0.5" content='<'/>
                  <p className="w-10 border-black border-x text-center">{item.quantity}</p>
                  <Button onClick={changeCartItemQuantity} params={{userId: userId, productId: item.product.id, quantity: item.quantity+1}} style="pr-2 pl-1 pb-0.5" content='>'/>
                </div>
              </div>
              <div className="w-60 flex gap-2 items-center justify-center">
                <p>${Number(item.product.price * item.quantity).toFixed(2)}</p>
                <Button onClick={removeCartItem} params={{userId: userId, productId: item.product.id}} style="px-2 pb-0.5 bg-gray-300 hover:bg-gray-600 hover:text-white rounded-full aspect-square flex items-center justify-center" content='x'/>
              </div>
            </div>)}
        <div className="flex flex-col items-end py-8 gap-2 text-xl">
          <p>TOTAL: ${Number(items.reduce((acc,item) => acc + item.product.price * item.quantity, 0).toFixed(2))}</p>
          <Button onClick={removeAllCartItems} params={userId} style='bg-red-500 text-black text-lg rounded p-2' content='Reset Cart'/>
        </div>
      </div>
    </div>)
}
