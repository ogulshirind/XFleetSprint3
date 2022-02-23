package com.vytrack.step_definitions;

import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginStepDefs {

    LoginPage loginPage = new LoginPage();

    @Given("user is on the login page")
    public void userIsOnTheLoginPage() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("user logs in using {string} and {string}")
    public void user_logs_in_using_and(String username, String password) {
        loginPage.login(username, password);
    }

    @Then("the title contains {string}")
    public void the_title_contains(String expectedTitle) {
        System.out.println("expectedTitle = " + expectedTitle);
        BrowserUtils.waitFor(3);
        Assert.assertTrue(Driver.get().getTitle().contains(expectedTitle));
    }

    @When("user logs in as {string}")
    public void user_logs_in_as(String userType) {
        loginPage.loginAsUserType(userType);
        BrowserUtils.waitFor(10);
    }

    @Then("the user lands on Quick Launchpad {string}")
    public void the_user_lands_on_Quick_Launchpad(String pageNameHeader) {
        Assert.assertEquals("Quick Launchpad", pageNameHeader);
    }

    @Then("the user lands on Dashboard {string}")
    public void the_user_lands_on_Dashboard(String pageNameHeader) {
        Assert.assertEquals("Dashboard", pageNameHeader);
    }

    @Then("message {string} should be displayed")
    public void message_should_be_displayed(String messageForInvalidCredentials) {
        //Assert.assertTrue(loginPage.messageForInvalidCredentials.getText().equals(messageForInvalidCredentials));
    }


    /*@Then("message displays {string}")
    public void message_displays(String messageFillOutField) {
        if(loginPage.usernameInput.getAttribute("value").equals("")){
            Assert.assertTrue("fill out field message should be displayed", messageFillOutField);
        } else if (loginPage.passwordInput.getAttribute("value").equals("")){
            Assert.assertTrue("fill out field message should be displayed", messageFillOutField);
        }
    }*/


    @When("user clicks {string} link")
    public void user_clicks_link(String forgotPasswordLink) {
        loginPage.forgotPasswordLink.click();
    }

    @Then("remember me checkbox is clickable")
    public void remember_me_checkbox_is_clickable() {
        loginPage.checkbox.click();
    }


    @When("user inputs {string}")
    public void user_inputs_password(String password) {
        loginPage._password.sendKeys(password);
    }

    @Then("password is masked")
    public void password_is_masked() {

    }

    @Then("user sees full name")
    public void user_sees_full_name() {

    }






}
