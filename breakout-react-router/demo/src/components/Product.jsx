import {useParams, useNavigate} from 'react-router';
import { useEffect } from 'react';

const Product = (props) => {
  const params = useParams();
  console.log(params);

  const productId = params.product_id; // req.params.product_id

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/about');
    }, 3000);
  }, []);


  // useEffect(() => {
  //   // fetch(`/api/products/${productId}`);
  //   props.state.products[productId];
  // }, [productId]);

  return (
    <div>
      <h2>Product Component #{productId}</h2>
    </div>
  );
};

export default Product;
