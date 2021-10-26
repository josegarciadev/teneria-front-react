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
const ModalEditUser = ({ title, handleDispatch, user }) => {
  const [modal, setModal] = useState(false);

  const [formUser, setFormUser] = useState(user);
  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    console.log(e);
    setFormUser({
      ...formUser,
      [e.name]: e.value,
    });
  };

  const handleClear = () => {
    setFormUser({
      name: "",
      password: "",
      email: "",
    });
    toggle();
  };
  const handleUpdate = async (e) => {
    await axiosFetch({
      method: "patch",
      url: "/admin/user/update/" + user.id,
      data: {
        email: formUser.email,
        name: formUser.name,
        password: formUser.password,
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
        <ModalHeader toggle={toggle}>
          {title} {user.name}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="Name">Nombre</Label>
              <Input
                type="text"
                name="name"
                id="Name"
                value={formUser.name}
                onChange={({ target }) => handleChange(target)}
                placeholder="Agregar Nombre"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input
                type="email"
                name="email"
                id="Email"
                value={formUser.email}
                onChange={({ target }) => handleChange(target)}
                placeholder="usuario@test.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Contraseña</Label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="Password"
                onChange={(e) => handleChange(e.target)}
                placeholder="Ingrese una contraseña"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Estado</Label>
              <Input
                type="select"
                name="delete"
                value={formUser.delete}
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

export default ModalEditUser;
