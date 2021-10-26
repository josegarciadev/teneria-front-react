import React, { useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import ModalCreateLineProd from "../../../components/Admin/LineProd/ModalCreateLineProd";
import TableListLineProd from "../../../components/Admin/LineProd/TableListLineProd";
import axiosFetch from "../../../config/config";
import { getLines,selectLines} from "../../../feactures/Lines/Lines";
import { getLinesProds,selectLinesProds} from "../../../feactures/LinesProds/LinesProds";

const LinesProds = () => {
    const dispatch = useDispatch();
    const lines = useSelector(selectLines)
    const [prods, setprods] = useState([])
    
    const linesProd = useSelector(selectLinesProds)
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
    dispatch(getLines());
    dispatch(getLinesProds());
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
              Lineas Productos
            </CardTitle>
            <CardBody>
              <div className="py-2">
                <ModalCreateLineProd handleDispatch={handleDispatch} prods={prods} lines={lines}/>
              </div>

              <TableListLineProd handleDispatch={handleDispatch}  prods={prods}  lines={lines} linesprods={linesProd} />
            </CardBody>
          </Card>
        </Col>
      </Row>
        </div>
    )
}

export default LinesProds
