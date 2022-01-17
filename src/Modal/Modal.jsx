import "../Modal/modal.css"

export function Modal(props) {
  if (!props.show) {
    return null;
  } else {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-body">{props.text}</div>
          <button className="modal-button" onClick={props.onClose}>
            x
          </button>
        </div>
      </div>
    );
  }
}
