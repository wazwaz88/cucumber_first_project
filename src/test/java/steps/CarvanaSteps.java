package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.WebDriver;
import pages.CarvanaHomePage;
import utilities.ActionsUtil;
import utilities.Driver;
import utilities.DropdownHandler;
import utilities.Waiter;

public class CarvanaSteps {

    WebDriver driver;
    CarvanaHomePage carvanaHomePage;

    @Before
    public void setup(){
        driver = Driver.getDriver();
        carvanaHomePage = new CarvanaHomePage();
    }


    @When("user clicks on {string} menu item")
    public void userClicksOnMenuItem(String buttonText) {
        switch (buttonText){
            case "CAR FINDER":
                Waiter.pause(5);
                carvanaHomePage.carFinderButton.click();
                break;
            case "SELL/TRADE":
                carvanaHomePage.sellButton.click();
                break;
            case "AUTO LOAN CALCULATOR":
                carvanaHomePage.autoLoanCalculator.click();
                break;
            default:
                throw new NotFoundException("The menu item text is not defined properly in the feature file!!!");
        }
    }

    @Then("user should be navigated to {string}")
    public void user_should_be_navigated_to(String string) {
        Assert.assertEquals(string, driver.getCurrentUrl());
    }

    @And("user should see {string} text")
    public void user_should_see_text(String string) {

        switch (string){
            case "WHAT CAR SHOULD I GET?":
                Assert.assertTrue(carvanaHomePage.whatCarHeading1.isDisplayed());
                Assert.assertEquals(string, carvanaHomePage.whatCarHeading1.getText());
                break;
            case "Car Finder can help! Answer a few quick questions to find the right car for you.":
                Assert.assertTrue((carvanaHomePage.carFinderCanHelpHeading3.isDisplayed()));
                Assert.assertEquals(string, carvanaHomePage.carFinderCanHelpHeading3.getText());
                break;
            case "WHAT IS MOST IMPORTANT TO YOU IN YOUR NEXT CAR?":
                Assert.assertTrue((carvanaHomePage.tryCarFinderHeadline.isDisplayed()));
                Assert.assertEquals(string, carvanaHomePage.tryCarFinderHeadline.getText());
                break;
            case "Select up to 4 in order of importance":
                Assert.assertTrue((carvanaHomePage.tryCarFinderSubHeading.isDisplayed()));
                Assert.assertEquals(string, carvanaHomePage.tryCarFinderSubHeading.getText());
                break;
            case "GET A REAL OFFER IN 2 MINUTES":
                Assert.assertTrue((carvanaHomePage.getARealOfferHeading.isDisplayed()));
                Assert.assertEquals(string, carvanaHomePage.getARealOfferHeading.getText());
                break;
            case "We pick up your car. You get paid on the spot.":
                Assert.assertTrue((carvanaHomePage.pickUpYourCarHeading.isDisplayed()));
                Assert.assertEquals(string, carvanaHomePage.pickUpYourCarHeading.getText());
                break;
            case "We couldn't find that VIN. Please check your entry and try again.":
                Waiter.waitUntilTextToBePresentInElement(driver, 30, carvanaHomePage.errorVINMessage, string);
                Assert.assertEquals(string, carvanaHomePage.errorVINMessage.getText());
                break;
            default:
                throw new NotFoundException("The heading text is not defined properly in the feature file!!!");
        }

    }

    @And("user should see {string} link")
    public void user_should_see_link(String string) {

        Assert.assertTrue(carvanaHomePage.tryCarFinderLink.isDisplayed());
        Assert.assertEquals(string, carvanaHomePage.tryCarFinderLink.getText());

    }

    @When("user clicks on {string} link")
    public void user_clicks_on_link(String string) {

        carvanaHomePage.tryCarFinderLink.click();

    }


    @When("user clicks on {string} button")
    public void userClicksOnButton(String button) {
        switch (button){
            case "VIN":
                carvanaHomePage.vinButton.click();
                break;
            case "GET MY OFFER":
                carvanaHomePage.getMyOfferButton.click();
                break;
            default:
                throw new NotFoundException("The button is not defined properly in the feature file!!!");
        }

    }

    @And("user enters vin number as {string}")
    public void userEntersVinNumberAs(String text) {

        carvanaHomePage.vinSearchBar.sendKeys(text);

    }

    @When("user hovers over on {string} menu item")
    public void userHoversOverOnMenuItem(String text) {

        ActionsUtil.moveToElement(carvanaHomePage.financingMenuItem);

    }

    @When("user enters {string} as {string}")
    public void userEntersAs(String promptQuestion, String text) {

        switch (promptQuestion){
            case "Cost of Car I want":
                carvanaHomePage.costOfCarInput.sendKeys(text);
                break;
            case "What is Your Down Payment?":
                carvanaHomePage.downPayment.sendKeys(text);
                break;
            default:
                throw new NotFoundException("The prompt question is not defined properly in the feature file!!!");
        }

    }

    @And("user selects {string} as {string}")
    public void userSelectsAs(String dropdown, String text) {

        switch (dropdown){
            case "What’s Your credit Score?":
                DropdownHandler.selectOptionByIndex(carvanaHomePage.creditScore, 0);
                break;
            case "Choose Your Loan Terms":
                DropdownHandler.selectOptionByIndex(carvanaHomePage.loanTermsMonths, 1);
                break;
            default:
                throw new NotFoundException("The dropdown is not defined properly in the feature file!!!");
        }

    }

    @Then("user should see the monthly payment as {string}")
    public void userShouldSeeTheMonthlyPaymentAs(String text) {

        Assert.assertEquals(text, carvanaHomePage.confirmedMonthlyPayment.getText());

    }
}
