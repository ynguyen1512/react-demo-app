import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCreateUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal 
      show={show} 
      onHide={handleClose} 
      size="xl"
      backdrop="static"
      className='modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row g-3">
  <div className="col-md-6">
    <label className="form-label">Email</label>
    <input type="email" className="form-control"/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Password</label>
    <input type="password" className="form-control"/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Username</label>
    <input type="text" className="form-control"/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Role</label>
    <select className="form-select">
      <option selected value="USER">USER</option>
      <option value="ADMIN">ADMIN</option>
    </select>
  </div>
  <div className='col-md-12'>
    <label className='form-label label-upload'>Upload File Image</label>
    <input type='file' hidden/>
  </div>

  <div className='col-md-12 img-preview'>
    {/* <span>Preview Image</span> */}
    <img src='https://bit.ly/eric-bot-2'/>
  </div>
</form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreateUser