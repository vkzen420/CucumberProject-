package TestRunner;

import org.junit.runner.RunWith;

//import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = "src/test/resouces/Features", glue = { "StepDefination" }, dryRun = false, plugin = { "pretty",
				"html:test-output", "json:test-output/cucumber.json",
				"junit:test-output/Cucumber.xml" }, monochrome = true, strict = true

)

public class TestRunner {

}
