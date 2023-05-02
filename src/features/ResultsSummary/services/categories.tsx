import { ICategory } from '@/interfaces'

export const getCategories = async (): Promise<ICategory[]> => {
  const response = await fetch('./api/categories')
  return response.json()
}
