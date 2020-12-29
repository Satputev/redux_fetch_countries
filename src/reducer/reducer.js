// import axios from "axios";

// const initialState = {
//   countries: [],
// };

// const reducer = (state = initialState, action) => {
//   const newState = { ...state };

//   switch (action.type) {
//     case "COUNTRY":
//       axios.get("https://restcountries.eu/rest/v2/all").then(
//         (posRes) => {
//           newState.countries = posRes.data;
//         },
//         (errRes) => {
//           console.log(errRes);
//         }
//       );
//   }

//   return newState;
// };

// export default reducer;

import axios from "axios";

const initialState = {
  name: "",
  job: "",
  id: "",
  c_date: "",
};

const reducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "GET":
      axios
        .post("https://reqres.in/api/users", {
          name: action.value.name,
          job: action.value.job,
        })
        .then(
          (posRes) => {
            newState.name = posRes.data.name;
            newState.job = posRes.data.job;
            newState.id = posRes.data.id;
            newState.c_date = posRes.data.createdAt;
          },
          (errRes) => {
            console.log(errRes);
          }
        );
  }
  return newState;
};

export default reducer;
