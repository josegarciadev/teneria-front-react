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
const ModalEditProvider = ({handleDispatch, data}) => {
    const [modal, setModal] = useState(false);

    const [form, setform] = useState(data);
    const toggle = () => setModal(!modal);
  
    const handleChange = (e) => {
      console.log(e);
      setform({
        ...form,
        [e.name]: e.value,
      });
    };
  

    const handleUpdate = async (e) => {
      if(form.name===''){invalidData('Nombre')}
      else{
        await axiosFetch({
          method: "patch",
          url: "/admin/provider/update/"+form.id,
          data: {
              code: form.code,
            name: form.name,
            type_data_id:form.type_data_id,
            delete:form.delete
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("user-token"),
          },
        })
          .then((resp) => {
              toggle()
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
          <ModalHeader toggle={toggle}>Editar Proveedor</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="Name">Nombre</Label>
                <Input
                  type="text"
                  name="name"
                  id="Name"
                  value={form.name}
                  onChange={({ target }) => handleChange(target)}
                  placeholder="Agregar Nombre"
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
}

export default ModalEditProvider
