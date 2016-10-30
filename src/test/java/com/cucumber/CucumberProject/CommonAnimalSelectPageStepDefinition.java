package com.cucumber.CucumberProject;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cucumber.util.WebDriverHelper;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class CommonAnimalSelectPageStepDefinition extends AbstractPageStepDefinitionAnimalSelect{
	
	
	WebDriver driver;
	
	// need to make Properties testConfig member variable below like this
		protected Properties testConfig;
		public String baseUrl;
		

		@Before("@AnimalSelect")
		public void testSetUp() throws FileNotFoundException, IOException {

			System.out.println("executing before method from AnimalSelect");

			testConfig = new Properties();
			testConfig.load(new FileInputStream("TestConfigAnimalSelectPage.properties"));

			driver = WebDriverHelper.createDriver(testConfig.getProperty("browser"));
			// the below baseUrl value is coming from the Java PropertiesFile
			baseUrl = testConfig.getProperty("baseUrl");
		}

		@After("@AnimalSelect")
		public void tearDown() {
			System.out.println("executing after method from Animal Select");
			WebDriverHelper.quitDriver(driver);
		}
		
	
	@Given("^I am on Animal Select page$")
	public void navigateToAnimalSelectPage() throws Throwable {
		
		driver.get(baseUrl);

	}

	@When("^I select Simba the Lion$")
	public void i_select_Simba_the_Lion() throws Throwable {
		Select dropdown = new Select(driver.findElement(By.cssSelector("select[ng-options='animal in animals']")));
		
		//To select option Simba the Lion
		dropdown.selectByVisibleText("Simba the Lion");

	}

	@When("^click on the CONTINUE link$")
	public void clickCONTINUElink() throws Throwable {
	    driver.findElement(By.id("continue_button")).click();
	}

	@SuppressWarnings("deprecation")
	@Then("^I should be on the Thank you page$")
	public void verifyThankyouPageMessage() throws Throwable {
		String expectedMessage = "Thank you";
		String expectedTitle = "Zoo Adoption | Confirmation";
	    String pageMessage = driver.findElement(By.xpath("//h1[@id='title']")).getText();
	    
	    Assert.assertTrue(pageMessage.contains(expectedMessage));
	    System.out.println("Hard Assertion -> 1st pagetext assertion executed.");
	    
	    
	    boolean testResults = driver.getTitle().contains(expectedTitle);			
		System.out.println(testResults);	
		Assert.assertTrue("The Thank you page has not loaded.", testResults);
		System.out.println("Hard Assertion -> 2nd page title assertion executed.");

	}
	
}
