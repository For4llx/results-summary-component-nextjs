// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { categories } from '../../../data/categories'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(categories)
}
