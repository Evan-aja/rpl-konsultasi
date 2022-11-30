import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function submitLaporan(
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
  res.status(200).redirect("/laporan")
}
