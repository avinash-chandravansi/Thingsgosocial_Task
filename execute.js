const validate = require("./logic.js"); //importing module from logic.js
const user = {
  name: "Avinash",
  phone: "7654876578",
  address: {
    contactName: "Avinash",
    detailAddress: {
      line1: "Sector /: A",
      line2: "Q dfgds847532 83274 No ",
      line3: " 364 Near Shopping Centre",
    },
    pin: "471625",
    country: "India",
  },
  cart: [
    {
      id: "Here",
      count: "45",
    },
    {
      id: "Two",
      count: "45",
    },
  ],
};

validate.fun(user);
