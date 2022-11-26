import { Laporan, PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   Datas: Laporan[]
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma=new PrismaClient()
  const body=req.body
  console.log('body: ',body)
  prisma.$connect
  let result=await prisma.laporan.findMany()
  prisma.$disconnect
  // res.status(200).json({ Nama: body.Nama,Nip_Nim: body.Nip_Nim, Penjelasan: body.Penjelasan })
  res.status(200).json({result})
}