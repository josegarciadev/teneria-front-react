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
const ModalEditProduct = ({handleDispatch, product}) => {
    const [modal, setModal] = useState(false);

    const [formProd, setformProd] = useState(product);
    const toggle = () => setModal(!modal);
  
    const handleChange = (e) => {
      console.log(e);
      setformProd({
        ...formProd,
        [e.name]: e.value,
      });
    };
  

    const handleUpdate = async (e) => {
      if(formProd.name===''){invalidData('Producto')}
      else if(formProd.code===''){invalidData('Codigo')}
      else if(formProd.type_product_id===0){invalidData('Unidad de medida')}
      else{
        await axiosFetch({
          method: "patch",
          url: "/admin/product/update/"+formProd.id,
          data: {
              code: formProd.code,
            name: formProd.name,
            type_product_id:formProd.type_product_id,
            delete:formProd.delete
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
          <ModalHeader toggle={toggle}>EditarProducto</ModalHeader>
          <ModalBody>
            <Form>
            <FormGroup>
                <Label for="Code">Codigo</Label>
                <Input
                  type="text"
                  name="code"
                  id="Code"
                  value={formProd.code}
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
                  value={formProd.name}
                  onChange={({ target }) => handleChange(target)}
                  placeholder="Agregar Nombre"
                />
              </FormGroup>
              <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input
                type="select"
                name="type_product_id"
                id="exampleSelect"
                value={formProd.type_product_id}
                onChange={(e) => handleChange(e.target)}
              >
                <option value={0}>Seleccionar</option>
                <option value={1}>Unidad</option>
                <option value={2}>Galon</option>
                <option value={3}>Juego</option>
                <option value={4}>Kilo Gramo</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Estado</Label>
              <Input
                type="select"
                name="delete"
                value={formProd.delete}
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

export default ModalEditProduct
