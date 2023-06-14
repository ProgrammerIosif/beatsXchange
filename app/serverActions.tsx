'use server'

import { auth } from "@clerk/nextjs";
import { prisma } from "@/prisma/client";
import { revalidatePath } from "next/cache";

export async function getProduct(productId: string) {
  return prisma.product.findUnique({
  where: {
    id: productId,
  }}).then(result => {
    return result
   }).catch(() => {
    return null})
}

export async function addProductToCart(formData: FormData) {
  let quantity: number = 1
  let productId: string = ''
  let userId: string = ''
  for (const pair of formData.entries()) {
    switch(pair[0]){
      case 'quantity': quantity = parseInt(pair[1].toString())
      case 'productId': productId = pair[1].toString()
      case 'userId': userId = pair[1].toString()
    }
  }
  console.log(quantity,productId,userId)
  if (userId == null) return
  const itemExists = await prisma.cartItem.findFirst({
    where: {
      productId: productId,
      userId: userId
    },
  }) !== null

  if(!itemExists) {
    await prisma.cartItem.create({
      data: {
        userId: userId,
        productId: productId,
        quantity: quantity
      }
    })
  }
}

export async function removeAllCartItems(userId: string) {
  await prisma.cartItem.deleteMany({
    where: {
      userId: userId
    }
  })
  revalidatePath('/cart')
}

