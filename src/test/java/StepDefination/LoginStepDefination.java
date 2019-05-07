package StepDefination;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefination {

	WebDriver driver;

	@Given("^user navigate to (http.*php)$")
	public void user_navigate_to_http_www_gcrit_com_build_login_php(String Url) throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\vkjai\\eclipse-workspace\\Seleniumnew\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get(Url);

	}

	@When("^user enter emailid \"(.*)\" and password \"(.*)\"$")
	public void user_enter_emailid_and_password(String Emailid, String Password) throws Throwable {
		WebElement Email = driver.findElement(By.xpath("//input[@name = 'email_address']"));
		Email.sendKeys(Emailid);

		WebElement Pass = driver.findElement(By.xpath("//input[@name = 'password']"));
		Pass.sendKeys(Password);

	}

	@When("^user clicks on sign in button$")
	public void user_clicks_on_sign_in_button() throws Throwable {
		WebElement Signin = driver.findElement(By.xpath("//span[text() = 'Sign In']"));
		Signin.click();

	}

	@Then("^User is on Home Page$")
	public void user_is_on_Home_Page() throws Throwable {
		String HomePageTitle_expected = "Welcome to GCR Shop";
		WebElement  e  = driver.findElement(By.xpath("//h1[text() = 'Welcome to GCR Shop']"));
		String HomePageTitle_actual = e.getText();
		System.out.println(HomePageTitle_actual);
		Thread.sleep(3000);
		Assert.assertEquals(HomePageTitle_expected, HomePageTitle_actual);
		System.out.println("Login Successful to GCR Shop");
		
		

	}
	
	@When("^User close the browser$")
	public void user_close_the_browser() throws Throwable {
	   driver.close();
	}
	
	@When("^user enter emailid and password$")
	public void user_enter_emailid_and_password(DataTable UserData) throws Throwable {
		
		List<List<String>> data = UserData.raw();
		System.out.println(data);
		WebElement Email = driver.findElement(By.xpath("//input[@name = 'email_address']"));
		Email.sendKeys(data.get(0).get(0));

		WebElement Pass = driver.findElement(By.xpath("//input[@name = 'password']"));
		Pass.sendKeys(data.get(0).get(1));
		
		
	   
	}
	
	@When("^user enter emailid1 and password1$")
	public void user_enter_emailid1_and_password1(DataTable UserData) throws Throwable {
		
		List<Map<String, String>> data =   UserData.asMaps(String.class, String.class);
		System.out.println(data);
		WebElement Email = driver.findElement(By.xpath("//input[@name = 'email_address']"));
		Email.sendKeys(data.get(0).get("emailid"));

		WebElement Pass = driver.findElement(By.xpath("//input[@name = 'password']"));
		Pass.sendKeys(data.get(0).get("Password"));

}
}