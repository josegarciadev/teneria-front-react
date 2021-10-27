import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col} from "reactstrap";
import { TableListUser, ModalUser } from "../../../components/Admin/Users";
import ButtonExport from "../../../components/ButtonExport/ButtonExport";
import { getUsers,selectUsers } from "../../../feactures/User/UserSlice";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers)
  const handleDispatch = ()=>{
    dispatch(getUsers());
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
              Usuarios
            </CardTitle>
            <CardBody>
            <div className="py-2 d-flex justify-content-between">
              <ModalUser buttonLabel="Nuevo Usuario" color='primary' title='Agregar Usuario' type='add' handleDispatch={handleDispatch}/>
              <ButtonExport url='http://127.0.0.1:8000/api/v1/PDF/usersPdf' />
              </div>
              <TableListUser handleDispatch={handleDispatch} users={users}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default User;
