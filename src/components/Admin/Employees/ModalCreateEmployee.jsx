import React,{useState} from "react";
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

const ModalCreateEmployee = ({ handleDispatch, departments }) => {
  const [modal, setModal] = useState(false);

  const [formDep, setformDep] = useState({
    name: "",
    description: "",
  });
  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    console.log(e);
    setformDep({
      ...formDep,
      [e.name]: e.value,
    });
  };

  const handleClear = () => {
    setformDep({
      name: "",
      description: "",
    });
    toggle();
  };
  const handleNewUser = async (e) => {
    await axiosFetch({
      method: "post",
      url: "/admin/department/create",
      data: {
        description: formDep.description,
        name: formDep.name,
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
        Nuevo Empleado
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Nuevo Departamento</ModalHeader>
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
              <Label for="exampleSelect">Select</Label>
              <Input
                type="select"
                name="delete"
                id="exampleSelect"
                onChange={(e) => handleChange(e.target)}
              >
                  {
                      departments.length>=1 && departments.map((value,index)=>{
                          return(
                            <option value={value.id} key={index}> {value.name} </option>
                          )
                      })
                  }
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
