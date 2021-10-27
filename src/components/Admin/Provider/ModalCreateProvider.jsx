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

const ModalCreateProvider = ({handleDispatch}) => {
    const [modal, setModal] = useState(false);

    const [form, setform] = useState({
      name: "",
      code: "",
      type_product_id:0
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
        name: "",
      });
      toggle();
    };
    const handleNew = async (e) => {
      await axiosFetch({
        method: "post",
        url: "/admin/provider/create",
        data: {
          name: form.name,
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
          Nuevo Proveedor 
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Agregar Nuevo Proveedor</ModalHeader>
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
export default ModalCreateProvider
