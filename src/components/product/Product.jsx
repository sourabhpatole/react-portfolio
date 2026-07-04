import './product.css';

const Product = ({ link, name, desc, tags = [] }) => {
  return (
    <div className="p">
      {/* Top Browser Header Mockup */}
      <div className="p-browser">
        <div className="p-circles-wrapper">
          <div className="p-circle red"></div>
          <div className="p-circle yellow"></div>
          <div className="p-circle green"></div>
        </div>
        <div className="p-title" title={name}>{name}</div>
      </div>

      {/* Main Content Area */}
      <div className="p-body">
        <div className="p-main-content">
          <p className="p-desc">{desc}</p>
          
          {/* Tech Stack Tags Container */}
          <div className="p-tags">
            {tags.map((tag, index) => (
              <span key={index} className="p-tag">{tag}</span>
            ))}
          </div>
        </div>
        
        {/* Full-Width Action Button */}
        <div className="p-actions">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} GitHub Repository`}
            className="p-btn primary"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;