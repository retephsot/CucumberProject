package com.cucumber.CucumberProject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Steps {
	
	WebDriver driver = null;
	
	@Before
	public void testSetUp() {	
		
		System.out.println("executing before method");
		
		//driver = new FirefoxDriver();
				
		
		System.setProperty("webdriver.chrome.driver",
		"C:\\SeleniumJars\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
				
	}
	
	@After
	public void tearDown() {
		System.out.println("executing after method");
		driver.close();
	}
	
	//additional before hook
	@Before("@web")
	public void testSetUpWeb() {	
		
		System.out.println("executing before method with web tag");
		
		//driver = new FirefoxDriver();
		
		System.setProperty("webdriver.chrome.driver",
		"C:\\SeleniumJars\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		
		
		
	}
	
	//additional after hook
	@After("@web")
	public void tearDownWeb() {
		System.out.println("executing after method with web tag");
		driver.close();
	}
	
	//additional before hook
		@Before("@dummy")
		public void testSetUpDummy() {	
			
			System.out.println("executing before method with dummy tag");
			
			//driver = new FirefoxDriver();
			
			System.setProperty("webdriver.chrome.driver",
			"C:\\SeleniumJars\\chromedriver_win32\\chromedriver.exe");
			driver = new ChromeDriver();
			
			
			
		}
		
		//additional after hook
		@After("@dummy")
		public void tearDownDummy() {
			System.out.println("executing after method with dummy tag");
			driver.close();
		}
		
	
	@Given("^I am at the zoo site$")
	public void shouldNavigateToZooSite() throws Throwable {
		driver.navigate().to("http://www.thetestroom.com/webapp/");

	}
	
	@When("^I navigate to adoption$")
	public void navigateToAdoption() throws Throwable {
		driver.findElement(By.id("adoption_link")).click();
	}

	@When("^I check for an available animal$")
	public void checkAvailableAnimal() throws Throwable {
		System.out.println("Running check avail animal method");
		driver.findElement(By.id("check_btn_02")).click();
	}

	@When("^I populate the form$")
	public void populateForm() throws Throwable {
		System.out.println("Running populate form method");
		driver.findElement(By.name("name_field")).sendKeys("Johnny");
		driver.findElement(By.name("address_field")).sendKeys("123 Happy Land");
		driver.findElement(By.name("postcode_field")).sendKeys("20033");
		driver.findElement(By.name("email_field")).sendKeys("john@johnny.net");
		driver.findElement(By.id("submit_adoption")).click();
		
		//wait 4 seconds to view input values
		Thread.sleep(4000);
		
	}

	@SuppressWarnings("deprecation")
	@Then("^There should be a confirmation message$")
	public void verifyConfirmMessageAvilable() throws Throwable {
		String expectedConfirm = "YOUR ADOPTION HAS BEEN SET UP";
		System.out.println("running verify confirm message method");
		String confirmMessage = driver.findElement(By.cssSelector("table tr:nth-child(2n) td:nth-child(2n) p")).getText();
		
		//assert
		Assert.assertEquals("1st assert failed.", expectedConfirm, confirmMessage);
		System.out.println("Hard Assertion -> 1st pagetext assertion executed.");
		
		//wait 2 seconds
		Thread.sleep(2000);
		
	}
	
	@SuppressWarnings("deprecation")
	@Then("^There should be a confirmation text$")
	public void verifyConfirmTextAvilable() throws Throwable {
		String expectedConfirm = "YOUR ADOPTION HAS BEEN SET UP";
		System.out.println("running verify confirm message method");
		String confirmMessage = driver.findElement(By.cssSelector("table tr:nth-child(2n) td:nth-child(2n) p")).getText();
		
		//assert
		Assert.assertEquals("1st assert failed.", expectedConfirm, confirmMessage);
		System.out.println("Hard Assertion -> 1st pagetext assertion executed.");
		
		//setting it up to fail to see fail message in report
		Assert.assertEquals("2nd assert failed.", expectedConfirm, "fail");
		System.out.println("Hard Assertion -> 2nd pagetext assertion executed.");
		
		//wait 2 seconds
		Thread.sleep(2000);
		
	}

}
