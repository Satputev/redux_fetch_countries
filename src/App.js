//***********Example 1  redux fetch data and send to component**************** */

// import React, { Component } from "react";
// import { connect } from "react-redux";
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <table align="center" border="1" cellPadding="10px" cellSpacing="10px">
//           <thead>
//             <tr>
//               <th>SRNO</th> <th>Country</th>
//               <th>Capital</th>
//               <th>Population</th>
//               <th>Region</th>
//               <th>Flag</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.countries.map((element, index) => (
//               <tr>
//                 <th>{index + 1}</th>
//                 <th>{element.name}</th>
//                 <th>{element.capital}</th>
//                 <th>{element.population}</th>
//                 <th>{element.region}</th>
//                 <th>
//                   <img src={element.flag} width="100" height="100"></img>
//                 </th>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <br></br>
//         <button onClick={this.props.getCountries}>Get Countries</button>
//       </div>
//     );
//   }
// }

// const recive = (state) => {
//   return {
//     countries: state.countries,
//   };
// };

// const send = (dispatch) => {
//   return {
//     getCountries: () => {
//       dispatch({ type: "COUNTRY" });
//     },
//   };
// };

// export default connect(recive, send)(App);

//**********************GET request Example**** */

/*
import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div className="container">
        <table className="table table-bordered table-stripped">
          <thead className="bg-info text-danger">
            <tr>
              <th>SRNO</th>
              <th>ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((element, index) => (
              <tr>
                <th>{index + 1}</th>
                <th>{element.id}</th>
                <th>{element.email}</th>
                <th>{element.first_name}</th>
                <th>{element.last_name}</th>
                <th>
                  <img src={element.avatar} width="100" height="100"></img>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=2").then(
      (posRes) => {
        this.setState({
          data: posRes.data.data,
        });
      },
      (errRes) => {
        console.log(errRes);
      }
    );
  }
}

*/

//******example 3 (POST REQUEST)************** */

import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <br></br>
        <br></br>
        <input type="text" ref="user_name" placeholder="username"></input>
        <input type="text" ref="user_job" placeholder="Job"></input>
        <br></br>

        <button
          onClick={() => {
            this.props.sendData(
              this.refs.user_name.value,
              this.refs.user_job.value
            );
          }}
        >
          Sent
        </button>
        <br></br>
        <h2 className="text-danger">
          Name: <span className="text-success">{this.props.name}</span>
        </h2>
        <h2 className="text-danger">
          JOB: <span className="text-success">{this.props.job}</span>
        </h2>
        <h2 className="text-danger">
          ID: <span className="text-success">{this.props.id}</span>
        </h2>
        <h2 className="text-danger">
          CREATED AT:
          <span className="text-success">{this.props.c_date}</span>
        </h2>

        <br></br>
      </div>
    );
  }
}

const recive = (state) => {
  return {
    name: state.name,
    job: state.job,
    id: state.id,
    c_date: state.c_date,
  };
};

const send = (dispatch) => {
  return {
    sendData: (arg1, arg2) => {
      dispatch({ type: "GET", value: { name: arg1, job: arg2 } });
    },
  };
};

export default connect(recive, send)(App);
