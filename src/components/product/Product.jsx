import './product.css';
import { SiNetlify } from 'react-icons/si';
import { GoMarkGithub } from 'react-icons/go';

const Product = ({ img, link, netlify, name }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        {/* <div className="p-title">{name}</div> */}
      </div>

      <div className="p-lower">
        <a
          href={netlify}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} Live Demo`}
        >
          <SiNetlify className="p-icon" />
        </a>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} GitHub Repository`}
        >
          <GoMarkGithub className="p-icon" />
        </a>
      </div>

      <div className="p-icon-font">{name}</div>

      <img src={img} alt={name} className="p-img" loading="lazy" />
    </div>
  );
};

export default Product;
