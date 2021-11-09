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

const ModalCreateLine = ({ handleDispatch,lines,prods }) => {
  const [modal, setModal] = useState(false);

  const [form, setform] = useState({
    stock: 0,
    line_id: 0,
    product_provider_id:0
  });
  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    console.log(e);
    setform({
      ...form,
      [e.name]: e.value,
    });
  };

  const handleClear = () => {
    setform({
      stock: 0,
      line_id: 0,
      product_provider_id:0
    });
    toggle();
  };
  const handleNewUser = async (e) => {
    if(form.product_provider_id===0){invalidData('Producto Proveedor')}
    else if(form.line_id===0){invalidData('Linea')}
    else if(form.stock===0){invalidData('Stock')}
    else{
      await axiosFetch({
        method: "post",
        url: "/admin/lineProd/create",
        data: {
          product_provider_id: form.product_provider_id,
          line_id:form.line_id,
          stock:form.stock
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
        Nueva Linea Producto
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Nueva Linea</ModalHeader>
        <ModalBody>
          <Form>
  
             <FormGroup>
              <Label for="exampleSelect">Producto</Label>
              <Input
                type="select"
                name="product_provider_id"
                id="exampleSelect"
                defaultValue={0}
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
                defaultValue={0}
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
                onChange={({ target }) => handleChange(target)}
                placeholder="Agregar cantidad existente"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e) => handleNewUser(e)}>
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
