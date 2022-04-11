// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  appName: string
  repo: string
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ appName: 'dibre', repo: 'romulo1984/dibre', message: 'Em breve você vai dibrar todo mundo!' })
}
