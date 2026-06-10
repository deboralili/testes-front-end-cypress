class CreateHeroPage {
    selectorsList() {
        const selectors = {
            nameInput: "[data-cy='nameInput']",
            priceInput: "[data-cy='priceInput']",
            fansInput: "[data-cy='fansInput']",
            savesInput: "[data-cy='savesInput']",
            powersSelect: "[data-cy='powersSelect']",
            avatarInput: "[data-cy='avatarFile']",
            submitButton: "button:contains('Submit')"
        }

        return selectors
    }

    checkCreateHeroPage() {
        cy.location('pathname').should('equal', '/heroes/new')
    }

    checkCreateHeroFormIsVisible() {
        cy.get(this.selectorsList().nameInput).should('be.visible');
        cy.get(this.selectorsList().priceInput).should('be.visible');
        cy.get(this.selectorsList().fansInput).should('be.visible');
        cy.get(this.selectorsList().savesInput).should('be.visible');
        cy.get(this.selectorsList().powersSelect).should('be.visible');
        cy.get(this.selectorsList().avatarInput).should('exist');
        cy.contains('Drop image here').should('be.visible')
        cy.get(this.selectorsList().submitButton).should('be.visible');
    }

    fillNameInput(name) {
        cy.get(this.selectorsList().nameInput).type(name);
    }

    fillPriceInput(price) {
        cy.get(this.selectorsList().priceInput).type(price);
    }

    fillFansInput(fans) {
        cy.get(this.selectorsList().fansInput).type(fans);
    }

    fillSavesInput(saves) {
        cy.get(this.selectorsList().savesInput).type(saves);
    }

    selectPower(power) {
        cy.get(this.selectorsList().powersSelect).select(power);
    }

    selectAvatarImage(image) {
        cy.get(this.selectorsList().avatarInput).selectFile(image)
    }

    clickSubmitButton() {
        cy.get(this.selectorsList().submitButton).click();
    }
}

export default CreateHeroPage