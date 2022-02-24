package com.vytrack.runners;

import com.vytrack.utilities.Driver;
import io.cucumber.java.Scenario;
import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hooks {



    @Before
    public void setup(){
        Driver.get().manage().window().maximize();
        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }




    @After
    public void tearDown(Scenario scenario){
        //taking screenshot
        //we need to place screenshot implementation on after method in hooks in cucumber

        if (scenario.isFailed()){
            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);

            //saving screenshot
            scenario.attach(screenshot, "image/png", "screenshot");
        }
        Driver.closeDriver();
    }




}
