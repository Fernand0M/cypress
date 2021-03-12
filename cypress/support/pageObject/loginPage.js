class LoginPage  {
  
  get login() {
    return {
        firstName: cy.xpath('(//input[contains(@class,"ng-invalid-required")])[1]'),
        lastName: cy.xpath('(//input[contains(@class,"ng-invalid-required")])[2]')
    };
}

/**
* Confirms the changes made to the modal.
*/
clickOnConfirm() {
    this.login.firstName.type('Clear this text')
    this.login.lastName.type('Clear this text')
}

};

export default new LoginPage();
