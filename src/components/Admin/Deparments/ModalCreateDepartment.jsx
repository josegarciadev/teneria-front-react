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
import Swal from 'sweetalert2'
import LoadingSpinner from "../../Loading/Loading";
import { invalidData, successCreate } from "../../../Hooks/AlertValidate";

const ModalCreateDepartment = ({ handleDispatch }) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [formDep, setformDep] = useState({
    name: "",
    description: "",
  });
  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
   
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
    if(formDep.name===''){
     invalidData('Nombre')
    }else{
      setLoading(true)
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
          setLoading(false)
          successCreate()
        })
        .catch((err) => {});
    }
    
  };
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Nuevo Departamento
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Nuevo Departamento</ModalHeader>
        <ModalBody>
          <Form>
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
              <Label for="Description">Descripción</Label>
              <Input
                type="textarea"
                name="description"
                id="Description"
                onChange={({ target }) => handleChange(target)}
                placeholder="Ingrese una descripciòn"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {loading
          ?
          <LoadingSpinner/>
            :
            <>
            <Button color="primary" onClick={(e) => handleNewUser(e)}>
            Agregar
          </Button>
          {" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button></>
        }
          
          
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCreateDepartment;
