package com.cucumber.CucumberProject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDefineScenarioOutLine {
	
	WebDriver driver = null;
	
	@Given("^I am on zoo site$")
	public void shouldNavigateToZoo() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
		"C:\\SeleniumJars\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.navigate().to("http://www.thetestroom.com/webapp/");

	}
	/*
	@When("^I click on Adoption$")
	public void clickAdoptionLink() throws Throwable {
		driver.findElement(By.id("adoption_link")).click();
	}

	@Then("^I check I am on Adoption$")
	public void verifyAdoptionTitle() throws Throwable {
		Assert.assertTrue(driver.getTitle().contains("Adoption"));
	}

	@When("^I click on About$")
	public void clickAboutLink() throws Throwable {
		driver.findElement(By.id("about_link")).click();
	}

	@Then("^I check I am on About Zoo$")
	public void verifyZooTitle() throws Throwable {
		Assert.assertTrue(driver.getTitle().contains("About"));
	}

	@When("^I click on Contact$")
	public void clickContactLink() throws Throwable {
		driver.findElement(By.id("contact_link")).click();
	}

	@Then("^I check I am on Contact$")
	public void verifyContactTitle() throws Throwable {
		Assert.assertTrue(driver.getTitle().contains("Contact"));
	}
	*/
	@And("^I close browser$")
	public void closeBrowser() throws Throwable {
		driver.close();
	}
	
	@When("^I click on ([^\"]*)$")
	public void clickContactLink(String link) throws Throwable {
		driver.findElement(By.id(link)).click();
	}
	
	@Then("^I check I am on ([^\"]*)$")
	public void verifyZooTitle(String title) throws Throwable {
		Assert.assertTrue(driver.getTitle().contains(title));
	}

}
