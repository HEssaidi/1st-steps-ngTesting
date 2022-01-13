### FirstStepNgTest
My first steps into Angular testing using Karma/Jasmine
### Jasmine
[Jasmine](https://jasmine.github.io/) is a behavior-driven development framework for testing JavaScript code that plays very well with Karma. Similar to Karma, it's also the recommended testing framework within the Angular documentation as it's setup for you with the Angular CLI. Jasmine is also dependency free and doesn't require a DOM.

#### beforeEach
is executed before each unit test; It will only be executed before each it() call.
we have other test cases like afterEach/beforeAll/afterAll ! 
...

#### AAA pattern
AAA is a common standard for writing unit test cases like same as JAVA. <br />
Arrange: It means arrange everything to setup unit test cases, like creating objects, initializing/mocking data... <br />
Act: means execute necessary functionality/method that needs to be tested. <br />
Assert: Check the expected result, easy peasy !!!!!! 

#### TestBed
TestBed is the primary api for writing unit tests for Angular applications and libraries.






