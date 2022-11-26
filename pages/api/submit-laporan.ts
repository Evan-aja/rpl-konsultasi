import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma=new PrismaClient()
  const body=req.body
  console.log('body: ',body)
  prisma.$connect
  await prisma.laporan.create({
    data: {
      Nama: body.Nama,
      NIP_NIM: body.Nip_Nim,
      Penjelasan: body.Penjelasan,
    }
  })
  prisma.$disconnect
  // res.status(200).json({ Nama: body.Nama,Nip_Nim: body.Nip_Nim, Penjelasan: body.Penjelasan })
  res.status(200).redirect("/")
}
