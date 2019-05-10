import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import { Link } from "react-router-dom";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showContactInfo: true };
  }

  onShowClick = e => {
    e.preventDefault();
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = async (id, dispatch) => {
    await fetch("https://jsonplaceholder.typicode.com/users/" + id, {
      method: "delete"
    })
      .then(() => {
        dispatch({ type: "DELETE_CONTACT", payload: id });
      })
      .then(() => {
        console.log("Delete Sucefully");
      });

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, value.dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
