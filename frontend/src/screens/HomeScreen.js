import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Helmet from 'react-helmet';

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Helmet>
        <title>Welcome To NYK | Home</title>
        <meta name='description' content='We sell Elecronics Products' />
        <meta name='keywords' content='electronics' />
      </Helmet>
      {!keyword && <ProductCarousel />}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'></Message>
      ) : (
        <>
          <Row>
            {products.map((product) => {
              return (
                <>
                  <Col
                    key={product._id}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    className='align-items-stretch d-flex'
                  >
                    <Product product={product} />
                  </Col>
                </>
              );
            })}
          </Row>
          <Paginate page={page} pages={pages} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
