import { PrismaClient } from '@prisma/client'

export default async function getLaporan() {
  const prisma=new PrismaClient()
  prisma.$connect
  let laporan=await prisma.laporan.findMany()
  prisma.$disconnect
  return laporan
}