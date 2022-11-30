import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function submitKomplain(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma=new PrismaClient()
  const body=req.body
  console.log('body: ',body)
  prisma.$connect
  await prisma.komplain.create({
    data: {
      Judul: body.Judul,
      Penjelasan: body.Penjelasan,
    }
  })
  prisma.$disconnect
  res.status(200).redirect("/komplain")
}
