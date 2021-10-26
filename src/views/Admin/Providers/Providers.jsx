import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import ModalCreateProvider from "../../../components/Admin/Provider/ModalCreateProvider";
import TableListProvider from "../../../components/Admin/Provider/TableListProvider";
import { getProviders,selectProvider } from "../../../feactures/Providers/Providers";

const Providers = () => {
    const dispatch = useDispatch();
    const providers = useSelector(selectProvider)
  const handleDispatch = () => {
    dispatch(getProviders())
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
              Proveedores
            </CardTitle>
            <CardBody>
              <div className="py-2">
                <ModalCreateProvider handleDispatch={handleDispatch}/>
              </div>
                <TableListProvider data={providers} handleDispatch={handleDispatch}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
        </div>
    )
}

export default Providers
