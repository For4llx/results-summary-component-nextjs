import { useQuery } from "@tanstack/react-query"
import { getCategories } from "../api/categories"

const useFetchCategories = () => {
    const {
        data: categories,
        isLoading: isLoadingCategories,
        isError: isErrorCategories,
        isSuccess: isSuccessCategories
    } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    })

    return {
        categories,
        isLoadingCategories,
        isErrorCategories,
        isSuccessCategories
    }
}

export default useFetchCategories
