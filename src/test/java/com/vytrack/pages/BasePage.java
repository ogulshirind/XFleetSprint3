package com.vytrack.pages;

import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BasePage {

    @FindBy(css = "h1[class='oro-subtitle']")
    public WebElement pageHeader;

    @FindBy(css = "div[class='loader-mask shown']")
    @CacheLookup
    protected WebElement loaderMask;

    @FindBy(css = "#user-menu > a")
    public WebElement userProfileName;

    @FindBy(className = "fa-caret-down")
    public WebElement dropDownButton;

    @FindBy(linkText = "Logout")
    public WebElement logoutButton;





    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }




    /**
     * Waits until loader screen present. If loader screen will not pop up at all,
     * NoSuchElementException will be handled  bu try/catch block
     * Thus, we can continue in any case.
     */
    public void waitUntilLoaderScreenDisappear() {
        try {
            WebDriverWait wait = new WebDriverWait(Driver.get(), 10);
            wait.until(ExpectedConditions.invisibilityOf(loaderMask));
        } catch (Exception e) {
            e.printStackTrace();
        }

    }




    /**
     * @return page name, for example: Dashboard
     */
    public String getPageSubTitle() {
        //ant time we are verifying page name, or page subtitle, loader mask appears
        waitUntilLoaderScreenDisappear();
//        BrowserUtils.waitForStaleElement(pageSubTitle);
        return pageHeader.getText();
    }





    public String getProfileUserName(){
        waitUntilLoaderScreenDisappear();
        BrowserUtils.waitForVisibility(userProfileName, 5);
        return userProfileName.getText();
    }








}
