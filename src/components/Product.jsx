import { Link } from "react-router-dom";

const Product = ({
  logo,
  product_name,
  _id,
  filterText,
  companySearch,
  product_company,
}) => {
  if (
    (product_name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 &&
      !companySearch) ||
    (product_company.toLowerCase().indexOf(filterText.toLowerCase()) === -1 &&
      companySearch)
  ) {
    return;
  }
  return (
    <article>
      <h3>{product_name}</h3>
      <h3>{product_company}</h3>
      <img
        src={new URL(logo, import.meta.url).href}
        alt={product_name}
        className="img"
        loading="lazy"
      />
      <Link to={`/product/${_id}`} className="btn">
        View more
      </Link>
    </article>
  );
};
export default Product;
