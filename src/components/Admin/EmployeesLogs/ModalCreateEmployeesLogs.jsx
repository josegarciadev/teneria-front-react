import moment from "moment";
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
import { invalidData, successCreate } from "../../../Hooks/AlertValidate";

const ModalCreateEmployeesLogs = ({ handleDispatch,employees,linesProds }) => {
  const [modal, setModal] = useState(false);

  const [form, setform] = useState({

    employee_scene_id: 0,
    employee_id:0,
    description:''
  });
  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
 
    setform({
      ...form,
      [e.name]: e.value,
    });
  };

  const handleClear = () => {
    setform({
    employee_scene_id: 0,
    employee_id:0,
    description:''
    });
    toggle();
  };
  const handleNewUser = async (e) => {
    if(form.employee_id===0){invalidData('Empleado')}
    else if(form.employee_scene_id===0){invalidData('Tipo')}
    else if(form.description===''){invalidData('Descripción')}
    else{
      await axiosFetch({
        method: "post",
        url: "/logs/employeeLogs/create",
        data: {
          employee_scene_id: form.employee_scene_id,
          employee_id:form.employee_id,
          description:form.description,
          date: moment()
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      })
        .then((resp) => {
          handleClear();
          handleDispatch();
          successCreate()
        })
        .catch((err) => {});
    }
    
  };
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Nuevo registro Empleados
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
              <Label for="exampleSelect">Tipo</Label>
              <Input
                type="select"
                name="employee_scene_id"
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
              <Label for="Stock">Descripción</Label>
              <Input
                type="text"
                name="description"
                id="Stock"
                onChange={({ target }) => handleChange(target)}
                placeholder="Agregar Descripcion"
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

export default ModalCreateEmployeesLogs;
