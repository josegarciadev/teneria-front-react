import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axiosFetch from "../../../config/config";
import { successCreate } from "../../../Hooks/AlertValidate";

import LoadingSpinner from "../../Loading/Loading";

const ModalDeleteDepartment = ({ department, handleDispatch }) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = () => setModal(!modal);
  const handleUpdate = async (e) => {
    setLoading(true);
    await axiosFetch({
      method: "delete",
      url: "/admin/department/delete/" + department.id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
    })
      .then((resp) => {
        setLoading(false);
        toggle();
        handleDispatch();
        successCreate()
      })
      .catch((err) => {});
  };
  return (
    <div>
      <button
        onClick={(e) => alert("click")}
        onClick={toggle}
        className="btn btn-outline-danger"
      >
        <i className="mdi mdi-close-circle"></i>
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Eliminar {department.name}</ModalHeader>
        <ModalBody>¿Esta seguro de eliminar este departamento?</ModalBody>
        <ModalFooter>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <Button color="primary" onClick={(e) => handleUpdate(e)}>
                Eliminar
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancelar
              </Button>
            </>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalDeleteDepartment;
