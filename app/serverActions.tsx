'use server'

import { prisma } from "@/prisma/client";
import { Product } from "@prisma/client";
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

export async function getCartItems(userId: string) {
  const cartItems = await prisma.cartItem.findMany({
    where: {
      userId: userId
    }
  })
  const products = await prisma.product.findMany()
  const items = cartItems.map(item => {
    return {
      product: products.find((product) => item.productId === product.id),
      quantity: item.quantity
    }
  })
  return items.filter(item => item.product) as {product: Product, quantity: number}[]
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
  else {
    changeCartItemQuantity({userId,productId,quantity})
  }
}

export async function changeCartItemQuantity({userId, productId, quantity}: {userId: string, productId: string, quantity: number}) {
  await prisma.cartItem.updateMany({
    where: {
      userId: userId,
      productId: productId
    },
    data: {
      quantity: quantity
    }
  })
  revalidatePath('/cart')
}

export async function removeCartItem({userId, productId}: {userId: string, productId: string}) {
  await prisma.cartItem.deleteMany({
    where: {
      userId: userId,
      productId: productId
    },
  })
  revalidatePath('/cart')
}

export async function removeAllCartItems(userId: string) {
  await prisma.cartItem.deleteMany({
    where: {
      userId: userId
    }
  })
  revalidatePath('/cart')
}

