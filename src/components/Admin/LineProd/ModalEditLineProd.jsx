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
const ModalEditLine = ({handleDispatch,data,prods,lines}) => {
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
      if(form.product_provider_id===0){invalidData('Producto Proveedor')}
    else if(form.line_id===0){invalidData('Linea')}
    else if(form.stock===0){invalidData('Stock')}
    else{
      await axiosFetch({
        method: "patch",
        url: "/admin/lineProd/update/" + data.id,
        data: {
          product_provider_id: form.product_provider_id,
        line_id:form.line_id,
        stock:form.stock,
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
              <Label for="exampleSelect">Producto</Label>
              <Input
                type="select"
                name="product_provider_id"
                id="exampleSelect"
                value={form.product_provider_id}
                onChange={(e) => handleChange(e.target)}
              >
                <option value={0}>Seleccionar</option>
                {
                  prods.length>=1 && prods.map((value,index)=>{
                    return(
                      <option value={value.id} key={index}>
                        {value.product_name} | {value.provider_name}
                        </option>
                    )
                  })
                }
              </Input>
            </FormGroup> 
            <FormGroup>
              <Label for="exampleSelect">Linea</Label>
              <Input
                type="select"
                name="line_id"
                id="exampleSelect"
                value={form.line_id}
                onChange={(e) => handleChange(e.target)}
              >
                <option value={0}>Seleccionar</option>
                {
                  lines.length>=1 && lines.map((value,index)=>{
                    return(
                      <option value={value.id} key={index}>
                        {value.line_name} | {value.department_name}
                        </option>
                    )
                  })
                }
              </Input>
            </FormGroup> 
           
            
            <FormGroup>
              <Label for="Stock">Stock</Label>
              <Input
                type="number"
                name="stock"
                id="Stock"
                value={form.stock}
                onChange={({ target }) => handleChange(target)}
                placeholder="Agregar cantidad existente"
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

export default ModalEditLine;
