package com.vytrack.pages;

import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    public WebElement _username;
    public WebElement _password;
    public WebElement _submit;

    @FindBy(className = "custom-checkbox__text")
    public WebElement checkbox;

    @FindBy(className = "alert alert-error")
    public WebElement messageForInvalidCredentials;

    @FindBy(linkText = "Forgot your password?")
    public WebElement forgotPasswordLink;

    @FindBy(css = "h1[class='oro-subtitle']")
    public WebElement pageHeader;




    public void login(String usernameText, String passwordText) {
        _username.sendKeys(usernameText);
        _password.sendKeys(passwordText);
        _submit.click();
    }

    public void loginAsDriver() {
        login(ConfigurationReader.get("driver_username"),
                ConfigurationReader.get("driver_password"));
    }

    public void loginAsSalesManager() {
        login(ConfigurationReader.get("sales_manager_username"),
                ConfigurationReader.get("sales_manager_password"));
    }

    public void loginAsStoreManager() {
        login(ConfigurationReader.get("store_manager_username"),
                ConfigurationReader.get("store_manager_password"));
    }

    public void loginAsUserType(String userType) {
        switch (userType) {
            case "driver":
                loginAsDriver();
                break;
            case "store manager":
                loginAsStoreManager();
                break;
            case "sales manager":
                loginAsSalesManager();
                break;
            default:
                System.out.println("no such user");
        }
    }


}
