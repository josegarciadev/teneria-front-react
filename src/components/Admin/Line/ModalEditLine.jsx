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
const ModalEditLine = ({handleDispatch,data, departments}) => {
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
      if(form.name===''){invalidData('Nombre')}
    else if(form.department_id===0){invalidData('Departmanto')}
    else{
      await axiosFetch({
        method: "patch",
        url: "/admin/line/update/" + data.id,
        data: {
          department_id:form.department_id,
            name:form.line_name,
            delete:form.delete
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      })
        .then((resp) => {
          toggle();
          handleDispatch();
          successCreate()
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
                name="line_name"
                id="Name"
                value={form.line_name}
                onChange={({ target }) => handleChange(target)}
                placeholder="Agregar Nombre"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Departamento</Label>
              <Input
                type="select"
                name="department_id"
                id="exampleSelect"
                value={form.department_id}
                onChange={(e) => handleChange(e.target)}
              >
                <option value={0}>Seleccionar</option>
                {
                  departments.length>=1 && departments.map((value,index)=>{
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
