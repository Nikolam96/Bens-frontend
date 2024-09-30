import { Link, useParams } from "react-router-dom";
import { getProduct, useDeleteProduct } from "../utils/ProductAPI";
import moment from "moment";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, error, isError, isLoading } = getProduct(id);
  const { deleteTask } = useDeleteProduct();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (isError) {
    return <p style={{ marginTop: "1rem " }}>{error.message}</p>;
  }

  const { product_name, product_company, description, createdAt, languages } =
    data;

  const formattedDate = moment(createdAt).format("MMMM Do YYYY, h:mm:ss A");

  return (
    <div>
      <h3>Product Name : {product_name}</h3>
      <h3>Product Company : {product_company}</h3>
      <h3>{description}</h3>
      <br />

      <p>Created at : {formattedDate}</p>
      <p>Languages : {languages || "No languages available"}</p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" className="btn">
          Go back
        </Link>
        <Link to={`/update-product/${id}`} className="btn btn-hipster">
          Edit
        </Link>
        <button className="btn btn-danger" onClick={() => deleteTask(id)}>
          Delete
        </button>{" "}
      </div>

      <br />
      <br />
    </div>
  );
};
export default SingleProduct;
