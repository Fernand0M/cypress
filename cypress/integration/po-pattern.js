import {LoginPagePO} from '../support/pageObject'
import constants from '../support/helpers/constants';

describe('Page Object Pattern Example', () => {
   
    beforeEach(() => {
      cy.visit(constants.URL_DEV)
    });

    it('testing', () => {
      LoginPagePO.loginPortal();
    });
});
