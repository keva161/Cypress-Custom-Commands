Cypress.Commands.add("login", (data) => {
	cy.contains(
		"Docket is fully fledged Todo web application for you to practise and learn about API testing."
	).should("be.visible");
	cy.get("a").contains("Register").click();
	cy.contains("Registration").should("be.visible");
	cy.get('input[id="username"]')
		.type(data.username)
		.should("have.value", data.username);
	cy.get('input[id="email"]')
		.type(data.email)
		.should("have.value", data.email);
	cy.get('input[id="password"]').type(data.password);
	cy.get('input[id="password2"]').type(data.password);
	cy.get('input[type="submit"]').contains("Register").click();
	cy.get(".alert-info").should(
		"contain",
		"Congratulations, you are now registered"
	);
});
