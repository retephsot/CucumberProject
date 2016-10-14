# CucumberProjectConcept
Creating sample cucumber tests using java and maven

Add the following dependencies in your pom.xml
<dependencies>
		<dependency>
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<version>4.11</version>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>info.cukes</groupId>
			<artifactId>cucumber-java</artifactId>
			<version>1.2.2</version>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>info.cukes</groupId>
			<artifactId>cucumber-picocontainer</artifactId>
			<version>1.2.2</version>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>info.cukes</groupId>
			<artifactId>cucumber-junit</artifactId>
			<version>1.2.2</version>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.seleniumhq.selenium</groupId>
			<artifactId>selenium-java</artifactId>
			<version>3.0.0</version>
		</dependency>
	</dependencies>
  
Set the @CucumberOptions with the following:

@CucumberOptions(
		format = {"pretty", "html:target/html/"},
		features = "src/test/resource"
		)
