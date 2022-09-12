//require("moment");
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js
// Cypress.Commands.add("loginByGoogleApi", () => {
//   cy.log("Logging in to Google");
//   Cypress.log({ message: Cypress.env("googleRefreshToken") });
//   cy.request({
//     method: "POST",
//     url: "https://www.googleapis.com/oauth2/v4/token",
//     body: {
//       grant_type: "refresh_token",
//       client_id: Cypress.env("googleClientId"),
//       client_secret: Cypress.env("googleClientSecret"),
//       refresh_token:
//         "1//04yG8CEGYq940CgYIARAAGAQSNwF-L9IrbInjsHw83fCVJ-pnDGmn23yqXgAN-WNAhxowzj3a5TnjcteWLVFhWsYZ4bsWC59Uzl4",
//     },
//   }).then(({ body }) => {
//     const { access_token, id_token } = body;

//     cy.request({
//       method: "GET",
//       url: "https://www.googleapis.com/oauth2/v3/userinfo",
//       headers: { Authorization: `Bearer ${access_token}` },
//     }).then(({ body }) => {
//       cy.log(body);
//       const userItem = {
//         token: id_token,
//         user: {
//           googleId: body.sub,
//           email: body.email,
//           givenName: body.given_name,
//           familyName: body.family_name,
//           imageUrl: body.picture,
//         },
//       };

//       window.localStorage.setItem("googleCypress", JSON.stringify(userItem));
//       cy.visit("https://accounts.lambdatest.com/dashboard");
//       cy.get(".googleSignInBtn").eq(0).click();
//       cy.wait(10000);
//     });
//   });
// });

// Cypress.on("uncaught:exception", (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false;
// });

require("@reportportal/agent-js-cypress/lib/commands/reportPortalCommands");
