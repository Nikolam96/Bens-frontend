import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import customAxios from "./customAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

export const getProducts = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await customAxios.get("/products");
      dispatch(getAllProducts(data));
      return data;
    },
  });
  return { isLoading, isError, data, error };
};

export const getProduct = (id) => {
  const { isLoading, data, isError, error, isSuccess } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const data = await customAxios.get(`/product/${id}`);
      return data.data;
    },
  });
  return { isLoading, isError, data, error };
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createTask } = useMutation({
    mutationFn: (form) => customAxios.post("/create-product", { form }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product created");
      navigate("/");
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });
  return { createTask };
};

export const useEditProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ id, form }) => {
      return customAxios.patch(`/update-product/${id}`, { form });
    },
    onSuccess: ({ data }) => {
      toast.success("Product Modified");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate(`/product/${data._id}`);
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });
  return { editTask };
};
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteTask } = useMutation({
    mutationFn: (id) => {
      return customAxios.delete(`/delete-product/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product Successfully Deleted");
      navigate("/");
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });
  return { deleteTask };
};
