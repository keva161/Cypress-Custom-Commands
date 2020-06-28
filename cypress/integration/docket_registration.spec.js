/// <reference types="cypress" />

describe("Testing Docket's Registration functionality", () => {
	before(function () {
		cy.fixture("user").as("user");
	});

	it("Registers a new account", function () {
		cy.visit("https://docket-test.herokuapp.com/");
		cy.login({
			username: this.user.username,
			email: this.user.emailAddress,
			password: this.user.password,
		});
	});
});
