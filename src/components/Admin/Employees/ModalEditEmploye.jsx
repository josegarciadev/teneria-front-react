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

const ModalEditEmploye = ({ handleDispatch, departments,employees }) => {
    const [modal, setModal] = useState(false);

    const [formEmpl, setformEmpl] = useState(employees);
    const toggle = () => setModal(!modal);
  
    const handleChange = (e) => {
        setformEmpl({
          ...formEmpl,
          [e.name]: e.value,
        });
      };
  
    const handleClear = () => {
     
      toggle();
    };
    const handleNewUser = async (e) => {
      await axiosFetch({
        method: "patch",
        url: "/admin/employee/update/"+formEmpl.id,
        data: {
            dni: formEmpl.dni,
            name: formEmpl.name,
            date_birth: formEmpl.date_birth,
            ingress:formEmpl.ingress,
            address:formEmpl.address,
            gender_id:formEmpl.gender_id,
            phone_number:formEmpl.phone_number,
            department_id:formEmpl.department_id,
            delete:formEmpl.delete
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
          <button
        onClick={(e) => alert("click")}
        onClick={toggle}
        className="btn btn-outline-success"
      >
        <i className="mdi mdi-border-color"></i>
      </button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Editar Empleado</ModalHeader>
            <ModalBody>
              <Form>
              <FormGroup>
                  <Label for="DNI">DNI</Label>
                  <Input
                    type="text"
                    name="dni"
                    id="DNI"
                    value={formEmpl.dni}
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
                    value={formEmpl.name}
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
                    value={formEmpl.date_birth}
                    onChange={({ target }) => handleChange(target)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Ingress">Fecha de ingreso a la empresa</Label>
                  <Input
                    type="date"
                    name="ingress"
                    id="Ingress"
                    value={formEmpl.ingress}
                    onChange={({ target }) => handleChange(target)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Address">Dirección</Label>
                  <Input
                    type="text"
                    name="address"
                    id="Address"
                    value={formEmpl.address}
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
                    value={formEmpl.phone_number}
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
                value={formEmpl.gender_id}
              >
                <option value={0}>Seleccionar</option>
                <option value={1}>Hombre</option>
                <option value={2}>Mujer</option>
              </Input>
            </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Departamento</Label>
                  <Input
                    type="select"
                    name="delete"
                    id="exampleSelect"
                    value={formEmpl.department_id}
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
                <FormGroup>
              <Label for="exampleSelect">Estado</Label>
              <Input
                type="select"
                name="delete"
                value={formEmpl.delete}
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
              <Button color="primary" onClick={(e) => handleNewUser(e)}>
                Editar
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
}

export default ModalEditEmploye
