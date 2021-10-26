import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import ModalCreateProviderProvider from "../../../components/Admin/ProductProvider/ModalCreateProductProvider";
import TableListProductProvider from '../../../components/Admin/ProductProvider/TableListProductProvider'
import axiosFetch from "../../../config/config";
import { getProducts, selectProducts } from "../../../feactures/Products/ProductSlice";
import { getProviders, selectProvider} from "../../../feactures/Providers/Providers";

const ProducProviders = () => {
    const dispatch = useDispatch();
    const [prods, setprods] = useState([])
    const products = useSelector(selectProducts)
    const providers = useSelector(selectProvider)
  const handleDispatch = async() => {

        await axiosFetch({
          method: "get",
          url: "/admin/product/prodprov/all",
          headers:{
            Authorization: 'Bearer ' + localStorage.getItem('user-token')
          }
        }).then((res) => {
          setprods(res.data)
        });

        dispatch(getProducts());
        dispatch(getProviders());
        
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
                <ModalCreateProviderProvider products={products} providers={providers} handleDispatch={handleDispatch}/>
              </div>
                <TableListProductProvider data={prods} handleDispatch={handleDispatch}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
        </div>
    )
}

export default ProducProviders
