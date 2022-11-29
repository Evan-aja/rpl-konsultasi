import { Laporan, PrismaClient } from '@prisma/client'

export default async function handler() {
  const prisma=new PrismaClient()
  prisma.$connect
  let komplain=await prisma.komplain.findMany()
  prisma.$disconnect
  return komplain
}