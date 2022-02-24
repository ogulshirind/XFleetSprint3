package com.vytrack.step_definitions;

import com.vytrack.pages.DashboardPage;
import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;

public class LoginStepDefs {

    LoginPage loginPage = new LoginPage();
    DashboardPage dashboardPage = new DashboardPage();


    //Given user is on the login page
    @Given("user is on the login page")
    public void userIsOnTheLoginPage() {
        Driver.get().get(ConfigurationReader.get("url"));
    }







    //And user checks checkbox
    @When("user checks checkbox")
    public void user_checks_checkbox() {
        BrowserUtils.waitFor(1);
        loginPage.checkbox.click();
        BrowserUtils.waitFor(2);
    }








    @When("the user logs in using {string} and {string}")
    public void the_user_logs_in_using_and(String username, String password) {
        loginPage.username.sendKeys(username);
        loginPage.password.sendKeys(password + Keys.ENTER);
        BrowserUtils.waitFor(2);
    }








    //Then the title contains "<title>"
    @Then("the title contains {string}")
    public void the_title_contains(String expectedPageTitle) {
        String actualPageTitle = Driver.get().getTitle();
        Assert.assertEquals(expectedPageTitle, actualPageTitle);
        System.out.println("actualPageTitle = " + actualPageTitle);
        System.out.println("expectedPageTitle = " + expectedPageTitle);
    }






    //And page header is "<pageHeader>" in "<userType>"
    @Then("page header is {string} in {string}")
    public void page_header_is_in(String expectedPageHeader, String userType) {

        String actualPageHeader = loginPage.pageHeader.getText();

        switch (userType){
            case "driver":
            case "sales manager":
            case "store manager":
                System.out.println("actualPageHeader = " + actualPageHeader);
                System.out.println("expectedPageHeader = " + expectedPageHeader);
                Assert.assertEquals(expectedPageHeader, actualPageHeader);
                break;
            default:
                System.out.println(actualPageHeader);
        }

    }








    @When("user logs in as {string}")
    public void user_logs_in_as(String userType) {
        loginPage.loginAsUserType(userType);
        BrowserUtils.waitFor(2);
    }








    @When("user clicks logout button")
    public void user_clicks_logout_button() {
        dashboardPage.dropDownButton.click();
        dashboardPage.logoutButton.click();
    }







    @Then("verify user is on the login page")
    public void verify_user_is_on_the_login_page() {
        String actualPageTitle = Driver.get().getTitle();
        Assert.assertEquals("Login", actualPageTitle);
    }


}






