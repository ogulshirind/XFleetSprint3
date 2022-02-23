package com.vytrack.pages;

import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "prependedInput")
    public WebElement usernameInput;

    @FindBy(id = "prependedInput2")
    public WebElement passwordInput;

    @FindBy(className = "custom-checkbox__text")
    public WebElement checkbox;

    @FindBy(id = "_submit")
    public WebElement loginButton;

    @FindBy(className = "oro-subtitle")
    public WebElement pageNameHeader;

    @FindBy(className = "alert alert-error")
    public WebElement messageForInvalidCredentials;

    @FindBy(linkText = "Forgot your password?")
    public WebElement forgotPasswordLink;

    public void login(String username, String password) {
        usernameInput.sendKeys(username);
        passwordInput.sendKeys(password);
        loginButton.click();
    }

    public void loginAsUserType(String userType){
        Driver.get().get(ConfigurationReader.get("url"));
        String username = null;
        String password = null;

        if (userType.equals("driver")){
            username = ConfigurationReader.get("driver_username");
            password = ConfigurationReader.get("driver_password");
        }else if (userType.equals("sales_manager")){
            username = ConfigurationReader.get("sales_manager_username");
            password = ConfigurationReader.get("sales_manager_password");
            //store_manager in equals method should be same as in example in feature  file
        }else if (userType.equals("store_manager")){
            username = ConfigurationReader.get("store_manager_username");
            password = ConfigurationReader.get("store_manager_password");
        }
    }

}
