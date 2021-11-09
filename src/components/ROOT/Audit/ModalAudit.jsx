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
const ModalAudit = ({ audit }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <button
        onClick={(e) => alert("click")}
        onClick={toggle}
        className="btn btn-outline-info"
      >
        <i className="mdi mdi-clipboard-text"></i>
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Auditoria</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="Name">Usuario</Label>
              <Input type="text" id="Name" value={audit.user_name} disabled />
            </FormGroup>
            <FormGroup>
              <Label for="Date">Fecha</Label>
              <Input
                type="text"
                id="Date"
                value={audit.date_current}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="Table">Tabla</Label>
              <Input type="text" id="Table" value={audit.name_table} disabled />
            </FormGroup>
            <FormGroup>
              <Label for="Table">Tabla</Label>
              <Input
                type="text"
                id="Table"
                value={audit.action_table}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="IP">IP</Label>
              <Input type="text" id="IP" value={audit.ip} disabled />
            </FormGroup>
            {audit.old_data ? (
              <FormGroup>
                <Label for="OLD">Data anterior</Label>
                <Input
                  type="textarea"
                  id="OLD"
                  value={audit.old_data}
                  disabled
                />
              </FormGroup>
            ) : null}
            {audit.new_data ? (
              <FormGroup>
                <Label for="NEW">Data Nueva</Label>
                <Input
                  type="textarea"
                  id="NEW"
                  value={audit.new_data}
                  disabled
                />
              </FormGroup>
            ) : null}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalAudit;
