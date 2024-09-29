import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/not-found.svg";
import styles from "./Error.module.css";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className={styles.error}>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!</h3>
          <p>We can't seem to find page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </div>
    );
  }
  return (
    <div id="Error">
      <div>
        <h3>something went wrong </h3>
      </div>
    </div>
  );
};
export default Error;
