package com.cucumber.CucumberProject;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDefinitionsWithDataTable {
	
	WebDriver driver = null;
	
	@Given("^I am on the zoo site$")
	public void shouldNavigateToZooSite() throws Throwable {
		//driver = new FirefoxDriver();
		System.setProperty("webdriver.chrome.driver",
		"C:\\SeleniumJars\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.navigate().to("http://www.thetestroom.com/webapp/");

	}

	@When("^I navigate to contact$")
	public void navigateToContactsPage() throws Throwable {
		driver.findElement(By.id("contact_link")).click();
	}

	@And("^I submit the form with valid data$")
	public void submitTheContactForm(DataTable table) throws Throwable {
		
		//System.out.println(table);
		
		List<List<String>> data = table.raw();
		
		System.out.println(data.get(1).get(1));
		
		driver.findElement(By.name("name_field")).sendKeys(data.get(1).get(1));
		driver.findElement(By.name("address_field")).sendKeys(data.get(2).get(1));
		driver.findElement(By.name("postcode_field")).sendKeys(data.get(3).get(1));
		driver.findElement(By.name("email_field")).sendKeys(data.get(4).get(1));
		
		Thread.sleep(3000);
		
		driver.findElement(By.id("submit_message")).click();
	}

	@Then("^I check that the form has been submitted$")
	public void checkTheConfirmationPage() throws Throwable {
		Assert.assertTrue("Not on contact confirmation page", 
		driver.findElement(By.cssSelector(".content h1"))
		.getText().contains("We have your message"));
		driver.close();
	}

	
	/*@Given("^I am on the zoo website$")
	public void shouldNavigateToZoo() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
		"C:\\SeleniumJars\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.navigate().to("http://www.thetestroom.com/webapp/");

	}

	@When("^I navigate to \"([^\"]*)\"$")
	public void ShouldClickOnLink(String link) throws Throwable {
		driver.findElement(By.id(link)).click();

	}

	@Then("^I check page title is \"([^\"]*)\"$")
	public void checkPageTitle(String title) throws Throwable {
		Assert.assertTrue(driver.getTitle().contains(title));
	}

	@And("^I close the browser$")
	public void closeBrowser() throws Throwable {
		driver.close();
	} */


}