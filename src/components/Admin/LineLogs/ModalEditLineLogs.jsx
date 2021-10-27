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
const ModalEditLine = ({handleDispatch,data,linesProds,employees}) => {
    const [modal, setModal] = useState(false);

    const [form, setform] = useState(data);
    const toggle = () => setModal(!modal);
  
    const handleChange = (e) => {
      setform({
        ...form,
        [e.name]: e.value,
      });
    };

    const handleUpdate = async (e) => {
      await axiosFetch({
        method: "patch",
        url: "/logs/lineProdLog/update/" + data.id,
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
          toggle();
          handleDispatch();
        })
        .catch((err) => {});
    };
  return (
    <div>
      <button
        onClick={(e) => alert("click")}
        onClick={toggle}
        className="btn btn-outline-success"
      >
        <i className="mdi mdi-border-color"></i>
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Editar Entrada/Salida de linea</ModalHeader>
        <ModalBody>
          <Form>
  
             <FormGroup>
              <Label for="exampleSelect">Empleado</Label>
              <Input
                type="select"
                name="employee_id"
                id="exampleSelect"
                value={form.employee_id}
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
                value={form.line_product_id}
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
                value={form.line_product_scenes_id}
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
                value={form.count}
                onChange={({ target }) => handleChange(target)}
                placeholder="Agregar cantidad"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Estado</Label>
              <Input
                type="select"
                name="delete"
                value={form.delete}
                id="exampleSelect"
                onChange={(e) => handleChange(e.target)}
              >
                <option value="false">Activo</option>
                <option value="true">Eliminado</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e) => handleUpdate(e)}>
            Editar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalEditLine;
