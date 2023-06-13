import { auth } from "@clerk/nextjs";
import { prisma } from "@/prisma/client";
import { revalidatePath } from "next/cache";

export async function addProductToCart(productId: string) {
  'use server'
  const {userId} = auth();
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
        quantity: 1
      }
    })
  }
}

export async function removeAllCartItems(userId: string) {
  'use server'
  await prisma.cartItem.deleteMany({
    where: {
      userId: userId
    }
  })
  revalidatePath('/cart')
}

