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

    @Given("user is on the login page")
    public void userIsOnTheLoginPage() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("user logs in using {string} and {string}")
    public void user_logs_in_using_and(String username, String password) {
        LoginPage loginPage = new LoginPage();
        loginPage.login(username, password);
    }

    @Then("the title contains {string}")
    public void the_title_contains(String expectedTitle) {
        System.out.println("expectedTitle = " + expectedTitle);
        BrowserUtils.waitFor(3);
        Assert.assertTrue(Driver.get().getTitle().contains(expectedTitle));
    }
}
