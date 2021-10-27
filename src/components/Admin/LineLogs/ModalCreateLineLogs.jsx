import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import axiosFetch from "../../../config/config";

const ModalCreateLine = ({ handleDispatch,employees,linesProds }) => {
  const [modal, setModal] = useState(false);

  const [form, setform] = useState({
    count: "",
    line_product_id: 0,
    employee_id:0,
    line_product_scenes_id:0
  });
  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    console.log(e);
    setform({
      ...form,
      [e.name]: e.value,
    });
  };

  const handleClear = () => {
    setform({
      count: "",
    line_product_id: 0,
    employee_id:0,
    line_product_scenes_id:0
    });
    toggle();
  };
  const handleNewUser = async (e) => {
    await axiosFetch({
      method: "post",
      url: "/logs/lineProdLog/create",
      data: {
        line_product_scenes_id: form.line_product_scenes_id,
        employee_id:form.employee_id,
        line_product_id:form.line_product_id,
        count:form.count
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
    })
      .then((resp) => {
        handleClear();
        handleDispatch();
      })
      .catch((err) => {});
  };
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Nuevo registro
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Registro Entrada/Salida</ModalHeader>
        <ModalBody>
          <Form>
  
             <FormGroup>
              <Label for="exampleSelect">Empleado</Label>
              <Input
                type="select"
                name="employee_id"
                id="exampleSelect"
                defaultValue={0}
                onChange={(e) => handleChange(e.target)}
              >
                <option value={0}>Seleccionar</option>
                {
                  employees.length>=1 && employees.map((value,index)=>{
                    return(
                      <option value={value.id} key={index}>
                        {value.name} 
                        </option>
                    )
                  })
                }
              </Input>
            </FormGroup> 
            
            <FormGroup>
              <Label for="exampleSelect">Linea Producto</Label>
              <Input
                type="select"
                name="line_product_id"
                id="exampleSelect"
                defaultValue={0}
                onChange={(e) => handleChange(e.target)}
              >
                <option value={0}>Seleccionar</option>
                {
                  linesProds.length>=1 && linesProds.map((value,index)=>{
                    return(
                      <option value={value.id} key={index}>
                        {value.line_name} | {value.department_name}
                        </option>
                    )
                  })
                }
              </Input>
            </FormGroup>  
            <FormGroup>
              <Label for="exampleSelect">Tipo</Label>
              <Input
                type="select"
                name="line_product_scenes_id"
                defaultValue={0}
                id="exampleSelect"
                onChange={(e) => handleChange(e.target)}
              >
                <option value={0}>Seleccionar</option>
                <option value={1}>Entrada</option>
                <option value={2}>Salida</option>
              </Input>
            </FormGroup>
            
            <FormGroup>
              <Label for="Stock">Cantidad</Label>
              <Input
                type="number"
                name="count"
                id="Stock"
                onChange={({ target }) => handleChange(target)}
                placeholder="Agregar cantidad"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e) => handleNewUser(e)}>
            Agregar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCreateLine;
