import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./alert.css";

export default function AlertDismiss() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Link to="/private-sell">
        <h3 className="animate-charcter-popup">
          <b> Private Sale is Live Now!</b>
        </h3>
      </Link>
    );
  }
  return null;
}
