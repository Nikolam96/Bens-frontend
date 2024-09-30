import { useForm } from "react-hook-form";
import { useCreateProduct } from "../utils/ProductAPI";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createTask } = useCreateProduct();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        className="form"
        onSubmit={handleSubmit((form) => {
          createTask(form);
        })}
      >
        <h3>Add Product:</h3>
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
          placeholder="Product name"
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
          placeholder="Description"
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
          placeholder="Product Company"
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
          <input type="submit" value="Add" className="btn" />
          <Link to="/" className="btn btn-danger">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};
export default AddProduct;
