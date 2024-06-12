import "./SuccessModal.css";

function SuccessModal({ show }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>Registration Successful.</p>
      </div>
    </div>
  );
}

export default SuccessModal;
