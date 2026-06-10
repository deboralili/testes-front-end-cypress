class HomePage {

    selectorsList() {
        const selectors = {
            likeButton: "[data-cy='like']",
            hireButton: "[data-cy='money']",
            createHeroButton: "[href='/heroes/new']",
            editHeroButton: "[data-cy='pencil']",
            deleteHeroButton: "[data-cy='trash']",
            heroCard: "[data-cy='hero-card']",
            heroName: "[data-cy='name']",
            heroPower: "[data-cy='powers']",
            heroPrice: "[data-cy='price']",
            heroFans: "[data-cy='fans']",
            heroSaves: "[data-cy='saves']"
        };
        return selectors;
    }

    checkLikeButtonVisible() {
        cy.get(this.selectorsList().likeButton).should('be.visible');
    }

    checkLikeButtonVisibleForEachHero() {
        cy.get(this.selectorsList().heroCard).each(($hero) => {
            cy.wrap($hero).find(this.selectorsList().likeButton)
                .should('be.visible')
        });
    }

    checkHireButtonVisible() {
        cy.get(this.selectorsList().hireButton).should('be.visible');
    }

    checkHireButtonVisibleForEachHero() {
        cy.get(this.selectorsList().heroCard).each(($hero) => {
            cy.wrap($hero).find(this.selectorsList().hireButton)
                .should('be.visible')
        });
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

    checkHeroListIsVisible() {
        cy.get(this.selectorsList().heroCard).should('have.length.greaterThan', 0).and('be.visible');
    }

    checkHeroAvatarIsVisible() {
        cy.get(this.selectorsList().heroCard).each(($hero) => {
            cy.wrap($hero)
                .find('img')
                .should('be.visible')

            cy.wrap($hero)
                .find('img')
                .should(($img) => {
                    expect($img[0].naturalWidth).to.be.greaterThan(0)
                })
        })
    }

    checkHeroNameIsVisible() {
        cy.get(this.selectorsList().heroCard).each(($hero) => {
            cy.wrap($hero).find(this.selectorsList().heroName)
                .should('be.visible')
                .and('not.be.empty')
        });
    }

    checkHeroPriceIsVisible() {
        cy.get(this.selectorsList().heroCard).each(($hero) => {
            cy.wrap($hero).find(this.selectorsList().heroPrice)
                .should('be.visible')
                .and('not.be.empty')
        })
    }

    checkHeroFansIsVisible() {
        cy.get(this.selectorsList().heroCard).each(($hero) => {
            cy.wrap($hero).find(this.selectorsList().heroFans)
                .should('be.visible')
                .and('not.be.empty')
        })
    }

    checkHeroSavesIsVisible() {
        cy.get(this.selectorsList().heroCard).each(($hero) => {
            cy.wrap($hero).find(this.selectorsList().heroSaves)
                .should('be.visible')
                .and('not.be.empty')
        })
    }

    checkHeroPowerIsVisible() {
        cy.get(this.selectorsList().heroCard).each(($hero) => {
            cy.wrap($hero).find(this.selectorsList().heroPower)
                .should('be.visible')
                .and('not.be.empty')
        })
    }

    checkHeroInformationIsVisible() {
        this.checkHeroAvatarIsVisible();
        this.checkHeroNameIsVisible();
        this.checkHeroPriceIsVisible();
        this.checkHeroFansIsVisible();
        this.checkHeroSavesIsVisible();
        this.checkHeroPowerIsVisible();
    }
}

export default HomePage;