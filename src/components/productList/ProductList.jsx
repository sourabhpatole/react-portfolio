import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
  return (
    <section className="pl" id="projects">
      <div className="pl-texts">
        <h1 className="pl-title">Featured Projects</h1>

        <p className="pl-desc">
          Explore some of the web applications I've built using React.js,
          Node.js, Express.js, MongoDB, PostgreSQL, and modern web technologies.
          Each project demonstrates my experience in developing scalable,
          responsive, and user-friendly applications.
        </p>
      </div>

      <div className="pl-list">
        {products?.length > 0 &&
          products.map(({ id, link, name, desc, tags }) => (
            <Product key={id} link={link} name={name} desc={desc} tags={tags} />
          ))}
      </div>
    </section>
  );
};

export default ProductList;
