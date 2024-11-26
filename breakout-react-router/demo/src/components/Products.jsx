import {Link} from 'react-router';

const Products = () => {
  return (
    <div>
      <h2>Products Component</h2>

      <Link to="/products/1">Product #1</Link><br/>
      <Link to="/products/2">Product #2</Link><br/>
      <Link to="/products/3">Product #3</Link><br/>
      <Link to="/products/4">Product #4</Link><br/>
      <Link to="/products/5">Product #5</Link><br/>
    </div>
  );
};

export default Products;
