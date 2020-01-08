import React from "react";
import humanity from "../../images/humanity.jpg";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Isaac",
      lastName: "",
      phoneNumber: "07",
      county: "",
      sub_county: "",
      ward: "",
      area: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleButton(event) {
    event.preventDefault();
    alert(
      `FirstName: ${this.state.firstName} LastName: ${this.state.lastName} Ward: ${this.state.ward} PhoneNumber: ${this.state.phoneNumber} `
    );
  }

  render() {
    return (
      <div
        className="profcard"
        style={{
          width: "100vw",
          height: "100vh",
          background: `url(${humanity})`,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          paddingTop: "50px"
        }}
      >
        <div
          className="card"
          style={{
            width: "60%",
            height: "30rem",
            opacity: "0.7",
            display: "flex"
          }}
        >
          <div
            className="prof"
            style={{
              marginLeft: "20px",
              marginTop: "20px",
              marginRight: "20px"
            }}
          >
            <form>
              <div className="row">
                <div className="form-group col-sm-12 col-md-6">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group col-sm-12 col-md-6">
                  <label>Last Name</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group col-sm-12 col-md-6">
                  <label>Phone Contact</label>
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group col-sm-12 col-md-6">
                  <label>County</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-12 col-md-6">
                  <label>Sub-County</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group col-sm-12 col-md-6">
                  <label>Ward</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label>Area</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
