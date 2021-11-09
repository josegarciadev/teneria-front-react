import React,{useState} from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axiosFetch from "../../../config/config";
import { successCreate } from "../../../Hooks/AlertValidate";

const ModalDeleteProvider = ({handleDispatch,data}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const handleUpdate = async (e) => {
      await axiosFetch({
        method: "post",
        url: "/admin/product/prodprov/delete",
        data:{
          provider_id:data.provider_id,
          product_id:data.product_id
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
      return (
        <div>
            <button onClick={(e)=>alert('click')}  onClick={toggle} className='btn btn-outline-danger'>
      <i className='mdi mdi-close-circle'  ></i>
      </button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
              Eliminar {data.product_name} | {data.provider_name}
            </ModalHeader>
            <ModalBody>
             ¿Esta seguro de eliminar este dato?
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={(e) => handleUpdate(e)}>
                Eliminar
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
}

export default ModalDeleteProvider
