import React,{useState} from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axiosFetch from "../../../config/config";

const ModalDeleteEmployee = ({ employee,handleDispatch}) => {
    const [modal, setModal] = useState(false);


    const toggle = () => setModal(!modal);
    const handleUpdate = async (e) => {
      await axiosFetch({
        method: "delete",
        url: "/admin/employee/delete/" + employee.id,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      })
        .then((resp) => {
          toggle();
          handleDispatch();
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
              Eliminar: {employee.name}
            </ModalHeader>
            <ModalBody>
             ¿Esta seguro de eliminar este usuario?
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

export default ModalDeleteEmployee
