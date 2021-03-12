import {LoginPagePO} from '../support/pageObject'

describe('Page Object Pattern Example', () => {
   
    beforeEach(() => {
      cy.visit('http://demo.automationtesting.in/Register.html')
    });

    it('testing', () => {
      LoginPagePO.clickOnConfirm();
    });
});
