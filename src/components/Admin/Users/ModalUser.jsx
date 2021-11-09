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

const ModalUser = ({
  buttonLabel,
  color,
  title,
  type,
  handleDispatch,
  admn,
}) => {
  const [modal, setModal] = useState(false);

  const [formUser, setFormUser] = useState({
    name: "",
    password: "",
    email: "",
  });
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

  const handleNewUser = async (e) => {
    await axiosFetch({
      method: "post",
      url: "/user/register",
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

  const handleNewAdmin = async (e) => {
    await axiosFetch({
      method: "post",
      url: "/ROOT/user/createAdmin",
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
      <Button color={color} onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
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
              <Label for="Email">Email</Label>
              <Input
                type="email"
                name="email"
                id="Email"
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
          </Form>
        </ModalBody>
        <ModalFooter>
          {admn ? (
            <Button color="primary" onClick={(e) => handleNewAdmin(e)}>
              Agregar Admin
            </Button>
          ) : (
            <Button color="primary" onClick={(e) => handleNewUser(e)}>
              Agregar
            </Button>
          )}{" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalUser;
