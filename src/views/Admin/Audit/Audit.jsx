import React, { useEffect,useState } from "react";
import { Card, CardBody, CardTitle, Row, Col} from "reactstrap";
import AuditTable from "../../../components/ROOT/Audit/AuditTable";
import axiosFetch from "../../../config/config";

const Audit = () => {
    const [data, setData] = useState([])
  const handleDispatch = async()=>{
    
    await axiosFetch({
        method:'get',
        url:'/ROOT/audit/all',
        headers:{
            Authorization: 'Bearer ' + localStorage.getItem('user-token')
          }
    }).then(resp=>{
        setData(resp.data)
    }).catch(err=>console.error(err))
  }
  useEffect(() => {
    handleDispatch();
  }, [])
  return (
    <div>
      <Row>
        <Col xs="12">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0 text-center">
              <i className="mdi mdi-priority-high mr-2"> </i>
              Auditorias
            </CardTitle>
            <CardBody>
           <AuditTable data={data}/>
        
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Audit;
