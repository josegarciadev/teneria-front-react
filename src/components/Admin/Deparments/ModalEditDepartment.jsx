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
import Swal from "sweetalert2";
import axiosFetch from "../../../config/config";
import LoadingSpinner from "../../Loading/Loading";
const ModalEditDepartment = ({ handleDispatch, department }) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formDep, setformDep] = useState(department);
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
      password: "",
      email: "",
    });
    toggle();
  };
  const handleUpdate = async (e) => {
    if (formDep.name === "") {
      Swal.fire({
        title: "Error!",
        text: "El nombre no puede estar Vacio",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      setLoading(true);
      await axiosFetch({
        method: "patch",
        url: "/admin/department/update/" + department.id,
        data: {
          description: formDep.description,
          name: formDep.name,
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      })
        .then((resp) => {
          setLoading(false);
          handleClear();
          handleDispatch();
        })
        .catch((err) => {});
    }
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
        <ModalHeader toggle={toggle}>Editar Departamento</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="Name">Nombre</Label>
              <Input
                type="text"
                name="name"
                id="Name"
                value={formDep.name}
                onChange={({ target }) => handleChange(target)}
                placeholder="Agregar Nombre"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Description">Descripciòn</Label>
              <Input
                type="textarea"
                name="description"
                id="Description"
                value={formDep.description}
                onChange={({ target }) => handleChange(target)}
                placeholder="Ingrese una descripciòn"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Estado</Label>
              <Input
                type="select"
                name="delete"
                value={formDep.delete}
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
      
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <Button color="primary" onClick={(e) => handleUpdate(e)}>
                Editar
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancelar
              </Button>
            </>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalEditDepartment;
