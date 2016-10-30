package com.cucumber.CucumberProject;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;

import com.cucumber.util.WebDriverHelper;

public class AbstractPageStepDefinitionAnimalSelect {
	
	protected WebDriver driver;
	protected Properties testConfig;
	
	protected WebDriver getDriver() throws IOException {
		
		testConfig = new Properties();
		testConfig.load(new FileInputStream("TestConfigAnimaSelectPage.properties"));

		driver = WebDriverHelper.createDriver(testConfig.getProperty("browser"));
		
		return driver;
	}
	
	

}
