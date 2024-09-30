import { useForm } from "react-hook-form";
import { getProduct, useEditProduct } from "../utils/ProductAPI";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditProduct = () => {
  const { id } = useParams();
  const { data, error, isError, isLoading } = getProduct(id);
  const { editTask } = useEditProduct();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data]);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (isError) {
    return <p style={{ marginTop: "1rem " }}>{error.message}</p>;
  }

  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit((form) => {
          editTask({ id, form });
        })}
      >
        <h3>Edited Product:</h3>
        <p>{errors.product_name?.message}</p>
        <label htmlFor="product_name">Product name:</label>
        <br />
        <input
          {...register("product_name", {
            required: "Please enter Company Name",
            minLength: {
              value: 4,
              message: "Product Name must be more than 4 characters",
            },
          })}
          id="product_name"
        />
        <p>{errors.description?.message}</p>
        <label htmlFor="description">Description:</label>
        <br />
        <textarea
          rows={7}
          cols={20}
          {...register("description", {
            required: "Please enter description",
            minLength: {
              value: 10,
              message: "Description must be more than 10 characters",
            },
          })}
          id="description"
        />
        <p>{errors.product_company?.message}</p>
        <label htmlFor="product_company">Product Company:</label>
        <br />
        <input
          {...register("product_company", {
            required: "Please enter Product Company",
            minLength: {
              value: 5,
              message: "Product Company must be more than 5 characters",
            },
          })}
          id="product_company"
        />
        <p>{errors.languages?.message}</p>
        <label htmlFor="languages">Languages:</label>
        <br />
        <input
          {...register("languages")}
          placeholder="en,srb,slo"
          id="languages"
        />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <input type="submit" value="save" className="btn" />
          <Link className="btn btn-danger" to={`/product/${id}`}>
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
};
export default EditProduct;
