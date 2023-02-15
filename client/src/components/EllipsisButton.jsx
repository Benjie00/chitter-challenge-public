import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function EllipsisButton() {
  return (
    <button>
      <FontAwesomeIcon icon={faEllipsisV} />
    </button>
  );
}

export default EllipsisButton;
