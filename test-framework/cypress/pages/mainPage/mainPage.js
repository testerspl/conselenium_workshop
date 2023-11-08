import mainPageSelectors from "./mainPageSelectors";
import BasePage from "../basePage";


class MainPage extends BasePage{


    goToPopularTraining(){

        cy.get(mainPageSelectors.popularTrainingContener).click();
    }
}


export const mainPage = new MainPage()