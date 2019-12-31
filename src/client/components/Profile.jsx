import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "07",
      county: "",
      sub_county: "",
      ward: "",
      area: ""
    };
    this.handleChange = this.handleChange.bind(this);
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
    console.log(this.props);
    return (
      <div>
        <form>
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            placeholder="first name"
            onChange={this.handleChange}
          />
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            placeholder="last name"
            onChange={this.handleChange}
          />
          <input
            name="phoneNumber"
            type="Number"
            value={this.state.phoneNumber}
            placeholder="Phone Number"
            onChange={this.handleChange}
          />
          <input
            name="county"
            type="text"
            value={this.state.county}
            placeholder="county"
            onChange={this.handleChange}
          />
          <input
            name="sub_county"
            type="text"
            value={this.state.sub_county}
            placeholder="Sub-County"
            onChange={this.handleChange}
          />
          <input
            name="ward"
            type="text"
            value={this.state.ward}
            placeholder="Ward"
            onChange={this.handleChange}
          />
          <input
            name="area"
            type="text"
            value={this.state.area}
            placeholder="Area"
            onChange={this.handleChange}
          />
        </form>
        <div>
          <button className="btn loginbtn" onClick={this.handleButton}>
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    );
  }
}
export default Profile;
