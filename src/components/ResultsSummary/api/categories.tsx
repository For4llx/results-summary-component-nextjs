import { ICategory } from "@/interfaces"

export const getCategories = async (): Promise<ICategory[]> => {
    const response = await fetch("http://localhost:3000/api/categories")
    return response.json()
}
