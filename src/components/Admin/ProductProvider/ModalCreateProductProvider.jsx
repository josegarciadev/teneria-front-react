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

const ModalCreateProviderProvider = ({handleDispatch,products, providers}) => {
    const [modal, setModal] = useState(false);

    const [form, setform] = useState({
      product_id: 0,
      provider_id: 0,
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
        product_id: 0,
        provider_id: 0,
      });
      toggle();
    };
    const handleNew = async (e) => {
      await axiosFetch({
        method: "post",
        url: "/admin/product/prodprov",
        data: {
          product_id: form.product_id,
          provider_id:form.provider_id
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
        <Button color="primary" onClick={toggle}>
          Nuevo Producto-Proveedor 
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Agregar Nuevo Proveedor</ModalHeader>
          <ModalBody>
            <Form>
            <FormGroup>
              <Label for="exampleSelect">Producto</Label>
              <Input
                type="select"
                name="product_id"
                id="exampleSelect"
                defaultValue={0}
                onChange={(e) => handleChange(e.target)}
              >
                <option value={0}>Seleccionar</option>
                {products.length>=1 && products.map((value,index)=>{
                    return(
                      <option key={value.name + index} value={value.id}>{value.name}</option>
                    )
                })}
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelect">Proveedor</Label>
              <Input
                type="select"
                name="provider_id"
                id="exampleSelect"
                defaultValue={0}
                onChange={(e) => handleChange(e.target)}
              >
                <option value={0}>Seleccionar</option>
                {providers.length>=1 && providers.map((value,index)=>{
                    return(
                      <option key={value.name + index} value={value.id}>{value.name}</option>
                    )
                })}
              </Input>
            </FormGroup>
        
            
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(e) => handleNew(e)}>
              Agregar
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}
export default ModalCreateProviderProvider
