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

const ModalCreateLine = ({ handleDispatch,departments }) => {
  const [modal, setModal] = useState(false);

  const [form, setform] = useState({
    name: "",
    department_id: 0,
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
      name: "",
      department_id: 0,
    });
    toggle();
  };
  const handleSave = async (e) => {
    if(form.name===''){invalidData('Nombre')}
    else if(form.department_id===0){invalidData('Departmanto')}
    else{
      await axiosFetch({
        method: "post",
        url: "/admin/line/create",
        data: {
          name: form.name,
          department_id:form.department_id
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
        Nueva Linea
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Nueva Linea</ModalHeader>
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
              <Label for="exampleSelect">Departamento</Label>
              <Input
                type="select"
                name="department_id"
                id="exampleSelect"
                defaultValue={0}
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
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e) => handleSave(e)}>
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

export default ModalCreateLine;
