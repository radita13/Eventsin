import { toast } from "@/components/ui/Toaster";
import categoryService from "@/services/category.service";
import { useMutation } from "@tanstack/react-query";

const useDeleteCategoryModal = () => {
  const deleteCategory = async (id: string) => {
    const res = await categoryService.deleteCategory(id);
    return res;
  };

  const {
    mutate: mutateDeleteCategory,
    isPending: isPendingMutateDeleteCategory,
    isSuccess: isSuccessMutateDeleteCategory,
  } = useMutation({
    mutationFn: deleteCategory,
    onError: (error) => {
      toast.error("error", error.message);
    },
    onSuccess: () => {
      toast.success("success", "Delete category successfully");
    },
  });

  return {
    mutateDeleteCategory,
    isPendingMutateDeleteCategory,
    isSuccessMutateDeleteCategory,
  };
};

export default useDeleteCategoryModal;
