package com.cucumber.CucumberProject;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cucumber.util.WebDriverHelper;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class CommonPageStepDefinition extends AbstractPageStepDefinition {

	WebDriver driver;

	// need to make Properties testConfig member variable below like this
	protected Properties testConfig;
	public String baseUrl;

	@Before("@TestRoom")
	public void testSetUp() throws FileNotFoundException, IOException {

		System.out.println("executing before method");

		testConfig = new Properties();
		testConfig.load(new FileInputStream("TestConfig.properties"));

		driver = WebDriverHelper.createDriver(testConfig.getProperty("browser"));
		// the below baseUrl value is coming from the Java PropertiesFile
		baseUrl = testConfig.getProperty("baseUrl");
		 
	}

	@After("@TestRoom")
	public void tearDown() {
		System.out.println("executing after method");
		WebDriverHelper.quitDriver(driver);
	}
	
	@Before("@Application")
	public void applicationTestSetUp() throws FileNotFoundException, IOException {

		System.out.println("executing before method");

		testConfig = new Properties();
		testConfig.load(new FileInputStream("TestConfig.properties"));

		driver = WebDriverHelper.createDriver(testConfig.getProperty("browser"));
		// the below baseUrl value is coming from the Java PropertiesFile
		baseUrl = testConfig.getProperty("baseUrl");
		 
	}

	@After("@Application")
	public void applicationTearDown() {
		System.out.println("executing after method");
		WebDriverHelper.quitDriver(driver);
	}

	// additional before hook
	@Before("@web")
	public void testSetUpWeb() throws FileNotFoundException, IOException {

		System.out.println("executing before method with web tag");

		testConfig = new Properties();
		testConfig.load(new FileInputStream("TestConfig.properties"));

		driver = WebDriverHelper.createDriver(testConfig.getProperty("browser"));
		// the below baseUrl value is coming from the Java PropertiesFile
		baseUrl = testConfig.getProperty("baseUrl");

	}

	// additional after hook
	@After("@web")
	public void tearDownWeb() {
		System.out.println("executing after method with web tag");
		WebDriverHelper.quitDriver(driver);
	}

	// additional before hook
	@Before("@dummy")
	public void testSetUpDummy() throws FileNotFoundException, IOException {

		System.out.println("executing before method with dummy tag");
		
		testConfig = new Properties();
		testConfig.load(new FileInputStream("TestConfig.properties"));

		driver = WebDriverHelper.createDriver(testConfig.getProperty("browser"));
		// the below baseUrl value is coming from the Java PropertiesFile
		baseUrl = testConfig.getProperty("baseUrl");

	}

	// additional after hook
	@After("@dummy")
	public void tearDownDummy() {
		System.out.println("executing after method with dummy tag");
		WebDriverHelper.quitDriver(driver);
	}

	@Given("^I am at the zoo site$")
	public void shouldNavigateToZooSite() throws Throwable {
		
		driver.get(baseUrl);

	}

	@When("^I navigate to adoption$")
	public void navigateToAdoption() throws Throwable {
		driver.findElement(By.id("adoption_link")).click();
	}

	@When("^I check for an available animal$")
	public void checkAvailableAnimal() throws Throwable {
		System.out.println("Running check avail animal method");
		// wait until check button is available
		WebDriverWait wait = new WebDriverWait(driver, 15);
		WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("check_btn_02")));

		Thread.sleep(1000);

		driver.findElement(By.id("check_btn_02")).click();
	}

	@And("^I populate the form$")
	public void populateForm() throws Throwable {
		System.out.println("Running populate form method");

		// wait until name_field is available
		WebDriverWait wait = new WebDriverWait(driver, 15);
		WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.name("name_field")));
		driver.findElement(By.name("name_field")).sendKeys("Johnny");
		driver.findElement(By.name("address_field")).sendKeys("123 Happy Land");
		driver.findElement(By.name("postcode_field")).sendKeys("20033");
		driver.findElement(By.name("email_field")).sendKeys("john@johnny.net");
		driver.findElement(By.id("submit_adoption")).click();

		// wait 4 seconds to view input values
		Thread.sleep(4000);

	}

	@SuppressWarnings("deprecation")
	@Then("^There should be a confirmation message$")
	public void verifyConfirmMessageAvilable() throws Throwable {
		String expectedConfirm = "YOUR ADOPTION HAS BEEN SET UP";
		System.out.println("running verify confirm message method");
		String confirmMessage = driver.findElement(By.cssSelector("table tr:nth-child(2n) td:nth-child(2n) p"))
				.getText();

		// assert
		Assert.assertEquals("1st assert failed.", expectedConfirm, confirmMessage);
		System.out.println("Hard Assertion -> 1st pagetext assertion executed.");

		// wait 2 seconds
		Thread.sleep(2000);
	}
	
	@Given("^I am on zoo site$")
	public void shouldNavigateToZoo() throws Throwable {
		
		driver.get(baseUrl);

	}

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
	
	@Given("^I am on my zoo website$")
	public void shouldGoToZooSite() throws Throwable {
		driver.get(baseUrl);
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
	}
	
	@SuppressWarnings("deprecation")
	@Then("^There should be a confirmation text$")
	public void verifyConfirmTextAvilable() throws Throwable {
		String expectedConfirm = "YOUR ADOPTION HAS BEEN SET UP";
		System.out.println("running verify confirm message method");
		String confirmMessage = driver.findElement(By.cssSelector("table tr:nth-child(2n) td:nth-child(2n) p"))
				.getText();

		// assert
		Assert.assertEquals("1st assert failed.", expectedConfirm, confirmMessage);
		System.out.println("Hard Assertion -> 1st pagetext assertion executed.");

		// setting it up to fail to see fail message in report
		Assert.assertEquals("2nd assert failed.", expectedConfirm, "fail");
		System.out.println("Hard Assertion -> 2nd pagetext assertion executed.");

		// wait 2 seconds
		Thread.sleep(2000);

	}

}
