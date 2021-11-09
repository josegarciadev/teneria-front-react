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

const ModalCreateProduct = ({handleDispatch}) => {
    const [modal, setModal] = useState(false);

    const [formProd, setformProd] = useState({
      name: "",
      code: "",
      type_product_id:0
    });
    const toggle = () => setModal(!modal);
  
    const handleChange = (e) => {
     
      setformProd({
        ...formProd,
        [e.name]: e.value,
      });
    };
  
    const handleClear = () => {
      setformProd({
        name: "",
        code: "",
        type_product_id:0
      });
      toggle();
    };
    const handleNewUser = async (e) => {
      if(formProd.name===''){invalidData('Producto')}
      else if(formProd.code===''){invalidData('Codigo')}
      else if(formProd.type_product_id===0){invalidData('Unidad de medida')}
      else{
        await axiosFetch({
          method: "post",
          url: "/admin/product/create",
          data: {
              code: formProd.code,
            name: formProd.name,
            type_product_id:formProd.type_product_id
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
          Nuevo Producto
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Agregar Nuevo Producto</ModalHeader>
          <ModalBody>
            <Form>
            <FormGroup>
                <Label for="Code">Codigo</Label>
                <Input
                  type="text"
                  name="code"
                  id="Code"
                  onChange={({ target }) => handleChange(target)}
                  placeholder="Agregar Codigo"
                />
              </FormGroup>
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
              <Label for="exampleSelect">Unidad de medida</Label>
              <Input
                type="select"
                name="type_product_id"
                id="exampleSelect"
                defaultValue={0}
                onChange={(e) => handleChange(e.target)}
              >
                <option value={0}>Seleccionar</option>
                <option value={1}>Unidad</option>
                <option value={2}>Galon</option>
                <option value={3}>Juego</option>
                <option value={4}>Kilo Gramo</option>
              </Input>
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
}
export default ModalCreateProduct
