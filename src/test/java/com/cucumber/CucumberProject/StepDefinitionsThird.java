package com.cucumber.CucumberProject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDefinitionsThird {
	
	WebDriver driver = null;
	
	@Given("^I am on my zoo website$")
	public void shouldNavigateToZooSite() throws Throwable {
		//driver = new FirefoxDriver();
		System.setProperty("webdriver.chrome.driver",
		"C:\\SeleniumJars\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.navigate().to("http://www.thetestroom.com/webapp/");
	}

	@When("^I click the contact link$")
	public void shouldClickOnContactLink() throws Throwable {
		driver.findElement(By.id("contact_link")).click();
	}

	@And("^populate the contact form$")
	public void shouldPopulateContactForm() throws Throwable {
		driver.findElement(By.name("name_field")).sendKeys("Jack Joe");
		driver.findElement(By.name("address_field")).sendKeys("123 happy land");
		driver.findElement(By.name("postcode_field")).sendKeys("A1 S22");
		driver.findElement(By.name("email_field")).sendKeys("iWillSubscrib@this.channel");
		driver.findElement(By.id("submit_message")).click();
	}

	@Then("^I should be on the contact confirmation page$")
	public void checkOnContactConfirmationPage() throws Throwable {
		System.out.println("The message displayed is " + driver.findElement(By.cssSelector(".content h1")).getText());
		Assert.assertTrue("Not on contact confirmation page", 
				driver.findElement(By.cssSelector(".content h1"))
				.getText().contains("We have your message"));
		driver.quit();
	}
	
		
}
