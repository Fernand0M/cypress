var data = require('../../fixtures/login.json');

class LoginPage  {
  
  get login() {
    return {
        firstName: cy.xpath('(//input[contains(@class,"ng-invalid-required")])[1]'),
        lastName: cy.xpath('(//input[contains(@class,"ng-invalid-required")])[2]'),
        submitBtn: cy.get('#submitbtn')
    };
}

/**
* Confirms the changes made to the modal.
*/
loginPortal() {
    this.login.firstName.type(data.username)
    this.login.lastName.type(data.password)
    this.login.submitBtn.click()
}

}

export default new LoginPage();
