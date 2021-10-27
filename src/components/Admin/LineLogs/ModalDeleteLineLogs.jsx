import React,{useState} from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axiosFetch from "../../../config/config";

const ModalDeleteLine = ({ data,handleDispatch}) => {
    const [modal, setModal] = useState(false);


    const toggle = () => setModal(!modal);
    const handleUpdate = async (e) => {
      await axiosFetch({
        method: "delete",
        url: "/logs/lineProdLog/delete/" + data.id,
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
            Eliminar: 
              <p className='p-0 m-0'>Linea= {data.line_name}</p>
              <p className='p-0 m-0'>Producto={data.product_name}</p>
              <p className='p-0 m-0'>Empleado={data.employee_name}</p>
            </ModalHeader>
            <ModalBody>
             ¿Esta seguro de eliminar esta registro?
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

export default ModalDeleteLine
