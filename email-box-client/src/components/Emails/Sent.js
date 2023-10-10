import React, { Fragment} from "react";
import { FaRegStar, FaRegSquare, FaTrash } from "react-icons/fa";
import classes from "./Index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromEmail } from "../../store/inbox-slice";
import {NavLink } from "react-router-dom";
// import {addItemToEmail} from '../../store/inbox-slice';
import { Nav } from "react-bootstrap";

const Sent = () => {
  const email = useSelector((state) => state.inbox.emails);
  // const emails=localStorage.getItem('endpoint')
  const dispatch = useDispatch();

  const containerStyle = {
    marginLeft: "2rem",
    marginTop: "1.8rem",
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
  };







// /*--------------------------------> Delete Data from BackEnd<------------------------------------------ */
const deleteHandler =(id)=>{
  dispatch(removeItemFromEmail(id));
}



  return (
    <Fragment>
      <div style={containerStyle}>
        {email.map((email) => (
          <div key={email.id} style={{ display: "flex",}} className={classes.hover}>
            <div>
              <FaRegSquare />
            </div>
            <div>
              <FaRegStar />
            </div>
            <div style={{ backgroundColor: "#4361ee", maxHeight: "1.4rem", borderRadius: "12px", marginLeft: "1rem" }}>
              <p>New</p>
            </div>
            <Nav.Link  as={NavLink} to={`/inbox/${email.id}`} style={{ marginLeft: "1rem", whiteSpace: "nowrap", 
            overflow: "hidden", textOverflow: "ellipsis", flex: 1 }}>
              <span style={{ width: "14rem", marginLeft: "1rem" }}>{email.toEmail}</span>
              <span style={{ marginLeft: "8rem", fontSize: "1.2rem" }}>{email.subject}</span>
              <span > 
              {email.message}
              </span>
              <span style={{ marginLeft: '4rem' }}>{new Date().toLocaleString('en-US', { timeZone: 'UTC' })}</span>

            </Nav.Link>
            <div style={{ cursor: "pointer",}} onClick={() => deleteHandler(email.id)}>
              <FaTrash />
            </div>
            
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Sent;


