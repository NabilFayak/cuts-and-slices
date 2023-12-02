// Parse.initialize("kW5k2CKsFDgQ9riE7zZC7uGCpWXYwMEBkPwa1eye","RcoB3PS3PSnNOKkHk0pwqopR3zW200dGeRBqgzLv");
// Parse.serverURL = 'https://parseapi.back4app.com/'

// // Create a new User
// async function createParseUser() {
//     // Creates a new Parse "User" object, which is created by default in your Parse app
//     let user = new Parse.User();
//     // Set the input values to the new "User" object
//     user.set("username", document.getElementById("username").value);
//     user.set("password", document.getElementById("pwd").value);
//     try {
//       // Call the save method, which returns the saved object if successful
//       user = await user.save();
//       if (user !== null) {
//         // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
//         alert(
//           `New object created with success! ObjectId: ${
//             user.id
//           }, ${user.get("username")}`
//         );
//       }
//     } catch (error) {
//       alert(`Error: ${error.message}`);
//     }
//   }

//   // Add on click listener to call the create parse user function
//   document.getElementById("submit").addEventListener("click", async function () {
//     createParseUser();
//   });