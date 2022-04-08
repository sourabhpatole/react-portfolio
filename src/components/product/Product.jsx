import "./product.css";
import { SiNetlify } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";

const Product = ({ img, link, netlify, name }) => {
  return (
    <>
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-title">{name}</div>
        </div>
        <div className="p-lower">
          <div>
            <a href={netlify} rel="noreferrer" target="_blank">
              <SiNetlify className="p-icon" />
            </a>
          </div>
          <a href={link} rel="noreferrer" target="_blank">
            <GoMarkGithub className="p-icon" target="_blank" />
          </a>
        </div>

        <img src={img} alt="" className="p-img" />
      </div>
    </>
  );
};

export default Product;
