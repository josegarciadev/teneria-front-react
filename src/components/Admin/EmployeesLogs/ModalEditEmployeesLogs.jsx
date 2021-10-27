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
const ModalEditEmployeesLogs = ({ handleDispatch, data, employees }) => {
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
      url: "/logs/employeeLogs/update/" + data.id,
      data: {
        employee_scene_id: form.employee_scene_id,
        employee_id:form.employee_id,
        description:form.description,
        date:form.date,
        delete:form.delete
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
        <ModalHeader toggle={toggle}>
          Editar Entrada/Salida de linea
        </ModalHeader>
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
                {employees.length >= 1 &&
                  employees.map((value, index) => {
                    return (
                      <option value={value.id} key={index}>
                        {value.name}
                      </option>
                    );
                  })}
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelect">Descripción</Label>
              <Input
                type="select"
                name="employee_scene_id"
                defaultValue={0}
                id="exampleSelect"
                value={form.employee_scene_id}
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
                value={form.description}
                onChange={({ target }) => handleChange(target)}
                placeholder="Agregar Descripcion"
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

export default ModalEditEmployeesLogs;
