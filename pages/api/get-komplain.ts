import { PrismaClient } from '@prisma/client'

export default async function getKomplain() {
  const prisma=new PrismaClient()
  prisma.$connect
  let komplain=await prisma.komplain.findMany()
  prisma.$disconnect
  return komplain
}