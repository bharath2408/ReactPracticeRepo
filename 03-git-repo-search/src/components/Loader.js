import GridContainer from "./GridContainer";
import "./Loader.css";

const Loader = ({ loaderImage }) => {
  return (
    <GridContainer>
      <div className="card-container">
        <img src={loaderImage} alt="Loading..." className="loader" />
      </div>
    </GridContainer>
  );
};

export default Loader;
