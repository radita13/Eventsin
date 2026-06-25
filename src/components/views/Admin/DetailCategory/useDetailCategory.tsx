import categoryService from "@/services/category.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useDetailCategory = () => {
    const { query, isReady } = useRouter();

    const getCategoryId = async (id: string) => {
        const { data } = await categoryService.getCategoryById(id);
        return data.data;
    }

    const { data: dataCategory } = useQuery({
        queryKey: ['category'],
        queryFn: () => getCategoryId(`${query.id}`),
        enabled: isReady
    })

    return {
        dataCategory
    }
}

export default useDetailCategory;