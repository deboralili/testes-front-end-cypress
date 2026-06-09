class HomePage {

    selectorsList() {
        const selectors = {
            likeButton: "[data-cy='like']",
            hireButton: "[data-cy='money']",
            createHeroButton: "[href='/heroes/new']",
            editHeroButton: "[data-cy='pencil']",
            deleteHeroButton: "[data-cy='trash']"
        };
        return selectors;
    }

    checkLikeButtonVisible() {
        cy.get(this.selectorsList().likeButton).should('be.visible');
    }

    checkHireButtonVisible() {
        cy.get(this.selectorsList().hireButton).should('be.visible');
    }

    checkCreateHeroButtonVisible() {
        cy.get(this.selectorsList().createHeroButton).should('be.visible');
    }

    checkEditHeroButtonVisible() {
        cy.get(this.selectorsList().editHeroButton).should('be.visible');
    }

    checkDeleteHeroButtonVisible() {
        cy.get(this.selectorsList().deleteHeroButton).should('be.visible');
    }

    checkAdministrativeFeaturesIsVisible() {
        this.checkHireButtonVisible();
        this.checkCreateHeroButtonVisible();
        this.checkEditHeroButtonVisible();
        this.checkDeleteHeroButtonVisible();
    }
};

export default HomePage;