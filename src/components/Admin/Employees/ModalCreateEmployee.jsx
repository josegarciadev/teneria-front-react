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
import { duplicateValue, invalidData, successCreate } from "../../../Hooks/AlertValidate";

const ModalCreateEmployee = ({ handleDispatch, departments }) => {
  const [modal, setModal] = useState(false);

  const [formEmpl, setformEmpl] = useState({
    dni: "",
    name: "",
    date_birth: "",
    ingress:'',
    address:'',
    gender_id:0,
    phone_number:0,
    department_id:0
  });
  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    setformEmpl({
      ...formEmpl,
      [e.name]: e.value,
    });
  };

  const handleClear = () => {
    setformEmpl({
      dni: "",
    name: "",
    date_birth: "",
    ingress:'',
    address:'',
    gender_id:0,
    phone_number:0,
    department_id:0
    });
    toggle();
  };
  const validate = ()=>{
    if(formEmpl.dni===''){
      invalidData('Documento de Identidad')
      return
    }
  }
  const handleNewUser = async (e) => {
    if(formEmpl.dni===''){invalidData('Documento de Identidad')}
    else if(formEmpl.name===''){invalidData('Nombre')}
    else if(formEmpl.date_birth===''){invalidData('Fecha de nacimiento')}
    else if(formEmpl.ingress===''){invalidData('Fecha de Ingreso')}
    else if(formEmpl.address===''){invalidData('Dirección')}
    else if(formEmpl.gender_id===0){invalidData('Genero')}
    else if(formEmpl.phone_number===0){invalidData('Numero Telefonico')}
    else if(formEmpl.department_id===0){invalidData('Departamento')}
    else{
    await axiosFetch({
      method: "post",
      url: "/admin/employee/create",
      data: {
        dni: formEmpl.dni,
        name: formEmpl.name,
        date_birth: formEmpl.date_birth,
        ingress:formEmpl.ingress,
        address:formEmpl.address,
        gender_id:formEmpl.gender_id,
        phone_number:formEmpl.phone_number,
        department_id:formEmpl.department_id
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
    })
      .then((resp) => {
        handleClear();
        handleDispatch();
        successCreate()
        console.log(resp)
      })
      .catch((err) => {
        if(err.response.data.message){
          duplicateValue('DNI')
        }
      });
    }
  };
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Nuevo Empleado
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Nuevo Empleado</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="DNI">DNI</Label>
              <Input
                type="text"
                name="dni"
                id="DNI"
                onChange={({ target }) => handleChange(target)}
                placeholder="Agregar Documento de Identidad"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Name">Nombre</Label>
              <Input
                type="text"
                name="name"
                id="Name"
                onChange={({ target }) => handleChange(target)}
                placeholder="Agregar Nombre"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Date">Fecha de nacimiento</Label>
              <Input
                type="date"
                name="date_birth"
                id="Date"
                onChange={({ target }) => handleChange(target)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Ingress">Fecha de ingreso a la empresa</Label>
              <Input
                type="date"
                name="ingress"
                id="Ingress"
                onChange={({ target }) => handleChange(target)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Address">Dirección</Label>
              <Input
                type="text"
                name="address"
                id="Address"
                placeholder="Su direccion actual"
                onChange={({ target }) => handleChange(target)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Phone">Numero Telefonico</Label>
              <Input
                type="text"
                name="phone_number"
                id="Phone"
                onChange={({ target }) => handleChange(target)}
                placeholder="Agregar numero telefonico  "
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Genero</Label>
              <Input
                type="select"
                name="gender_id"
                id="exampleSelect"
                onChange={(e) => handleChange(e.target)}
                defaultValue={0}
              >
                <option value={0}>Seleccionar</option>
                <option value={1}>Hombre</option>
                <option value={2}>Mujer</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Departmento</Label>
              <Input
                type="select"
                name="department_id"
                id="exampleSelect"
                onChange={(e) => handleChange(e.target)}
                defaultValue={0}
              >
                <option value={0}>Seleccionar</option>
                {departments.length >= 1 &&
                  departments.map((value, index) => {
                    return (
                      <option value={value.id} key={index}>
                        {" "}
                        {value.name}{" "}
                      </option>
                    );
                  })}
              </Input>
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

export default ModalCreateEmployee;
