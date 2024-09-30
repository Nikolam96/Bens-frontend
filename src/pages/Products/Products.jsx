import { useState } from "react";
import Product from "../../components/Product";
import { getProducts } from "../../utils/ProductAPI";
import styles from "./products.module.css";
import SearchProduct from "../../components/SearchProduct";
import { Link } from "react-router-dom";

const Products = () => {
  const { isLoading, data, isError, error } = getProducts();
  const [filterText, setFilterText] = useState("");
  const [companySearch, setCompanySearch] = useState(false);

  // We can also use React-Redux for centralized data
  // const { products } = useSelector((state) => state.productState);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (isError) {
    return <p style={{ marginTop: "1rem " }}>{error.message}</p>;
  }

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <SearchProduct
          filterText={filterText}
          setFilterText={setFilterText}
          companySearch={companySearch}
          setCompanySearch={setCompanySearch}
        />
        <Link
          to="/create-product"
          className="btn"
          style={{ marginBlock: "1rem" }}
        >
          Create new Product
        </Link>
        <br />
      </div>

      <br />
      <div className={styles.products}>
        {data.map((product) => {
          return (
            <Product
              key={product._id}
              {...product}
              filterText={filterText}
              companySearch={companySearch}
            />
          );
        })}
      </div>
    </>
  );
};
export default Products;
