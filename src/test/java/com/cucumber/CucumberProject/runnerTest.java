package com.cucumber.CucumberProject;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		// use "html:target/html/" or "json:target/json/output.json"
		format = {"pretty", "json:target/json/output.json", "html:target/html/"},
		features = "src/test/resource"
		)
public class runnerTest {

}