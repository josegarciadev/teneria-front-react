import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import ModalCreateProduct from "../../../components/Admin/Product/ModalCreateProduct";
import TableListProduct from "../../../components/Admin/Product/TableListProduct";
import { getProducts,selectProducts } from "../../../feactures/Products/ProductSlice";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts)
  const handleDispatch = () => {
    dispatch(getProducts())
  };
  useEffect(() => {
    handleDispatch();
  }, []);
    return (
        <div>
               <Row>
        <Col xs="12">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0 text-center">
              <i className="mdi mdi-priority-high mr-2"> </i>
              Productos
            </CardTitle>
            <CardBody>
              <div className="py-2">
                <ModalCreateProduct handleDispatch={handleDispatch}/>
              </div>
                <TableListProduct products={products} handleDispatch={handleDispatch}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
        </div>
    )
}

export default Products
