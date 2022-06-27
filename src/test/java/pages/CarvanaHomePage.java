package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class CarvanaHomePage {

    public CarvanaHomePage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(css = "a[data-cv-test='headerCarFinderLink']")
    public WebElement carFinderButton;

    @FindBy(xpath = "//h1")
    public WebElement whatCarHeading1;

    @FindBy(xpath = "//h3")
    public WebElement carFinderCanHelpHeading3;

    @FindBy(xpath = "//a[@data-qa='router-link']")
    public WebElement tryCarFinderLink;

    @FindBy(xpath = "//div[@data-qa='headline']")
    public WebElement tryCarFinderHeadline;

    @FindBy(xpath = "//div[@data-qa='sub-heading']")
    public WebElement tryCarFinderSubHeading;

    /*
    And user clicks on "GET MY OFFER" button
    Then user should see "We couldn’t find that VIN. Please check your entry and try again." text
     */

    @FindBy(xpath = "//a[@data-cv-test='headerTradesLink']")
    public WebElement sellButton;

    @FindBy(className = "kjhwtS")
    public WebElement getARealOfferHeading;

    @FindBy(className = "lnhlkr")
    public WebElement pickUpYourCarHeading;

    @FindBy(className = "dkObNV")
    public WebElement vinButton;

    @FindBy(className = "jLejJf")
    public WebElement vinSearchBar;

    @FindBy(xpath = "//button[@data-cv-test='heroGetMyOfferButton']")
    public WebElement getMyOfferButton;

    @FindBy(className = "kjoUgV")
    public WebElement errorVINMessage;

    @FindBy(className = "kAQuLc")
    public WebElement financingMenuItem;

    @FindBy(xpath = "//a[@data-cv-test='headerFinanceLoanCalc']")
    public WebElement autoLoanCalculator;

    @FindBy(xpath = "//input[@name='vehiclePrice']")
    public WebElement costOfCarInput;

    @FindBy(xpath = "//select[@name='creditScoreIndex']")
    public WebElement creditScore;

    @FindBy(xpath = "//select[@name='loanTerm']")
    public WebElement loanTermsMonths;

    @FindBy(xpath = "//input[@name='downPayment']")
    public WebElement downPayment;

    @FindBy(className = "loan-calculator-display-value")
    public WebElement confirmedMonthlyPayment;


}
