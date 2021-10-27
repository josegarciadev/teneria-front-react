import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import ModalCreateProvider from "../../../components/Admin/Provider/ModalCreateProvider";
import TableListProvider from "../../../components/Admin/Provider/TableListProvider";
import ButtonExport from "../../../components/ButtonExport/ButtonExport";
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
            <div className="py-2 d-flex justify-content-between">
                <ModalCreateProvider handleDispatch={handleDispatch}/>
                <ButtonExport url='http://127.0.0.1:8000/api/v1/PDF/providerPdf' />
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
