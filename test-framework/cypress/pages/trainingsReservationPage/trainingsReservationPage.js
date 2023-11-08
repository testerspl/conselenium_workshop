import trainingsReservationSelectors from "./trainingsReservationSelectors";
import BasePage from "../basePage";


class TrainingReservationPage extends BasePage{



    checkReservationFormElements() {

        cy.url().should('include', '/rezerwuj-szkolenie');
        cy.get(trainingsReservationSelectors.reservationForm).should('be.visible');
        cy.get(trainingsReservationSelectors.reservationCost).should('be.visible');
        cy.get(trainingsReservationSelectors.reservationDesc).should('be.visible');
    }
}


export const trainingReservationPage = new TrainingReservationPage()