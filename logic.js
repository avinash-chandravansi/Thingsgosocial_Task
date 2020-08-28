const fun = (user) => {
  let flag = false; //Flag
  //Checking for name field
  if (typeof user.name != "string" || !isNaN(user.name)) {
    console.log("Pease enter valid name string.");
    flag = true;
  }

  //checking for phone field
  // user.phone.length == 10  can be used to check mobile number length
  if (isNaN(user.phone)) {
    console.log("Please enter valid Mobile Number.");
    flag = true;
  }
  //checking address

  if (
    typeof user.address.contactName != "string" ||
    !isNaN(user.address.contactName)
  ) {
    console.log("Invalid contact name provided.");
    flag = true;
  }

  // Checking address line 1 ,2 and 3
  // user.address.detailAddress.line1.match(/^[a-z0-9]+$/i  can be used for alphanumeric address
  // According to given schema the value of address should be in string

  if (
    typeof user.address.detailAddress.line1 != "string" ||
    typeof user.address.detailAddress.line2 != "string" ||
    typeof user.address.detailAddress.line3 != "string"
  ) {
    console.log("Please enter valid  address.");
    flag = true;
  }

  //checking for pincode

  if (isNaN(user.address.pin)) {
    console.log("Invalid pin code provided.");
    flag = true;
  }

  //checking for country

  if (typeof user.address.country != "string") {
    console.log("Invalid country provided.");
    flag = true;
  }

  //checking for cart
  let length = parseInt(user.cart.length);

  for (var i = 0; i < length; i++) {
    if (typeof user.cart[i].id != "string") {
      console.log("Invalid cart id " + (i + 1));
      flag = true;
    }
    if (isNaN(user.cart[i].count)) {
      console.log("Invalid cart count at id:" + user.cart[i].id);
      flag = true;
    }
  }
  if (flag == false) {
    console.log("Schema Validated");
  }
};

exports.fun = fun; //exporting module to use in execute.js
