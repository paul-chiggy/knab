# Introduction 
This is a small project to test Trello board creation functionality. 
The UI part is implemented, but there is a hurdle with log-in via UI, meaning UI part is not complete and functional code is commented out.

# Getting Started
1.	Clone the repo with ```git clone git@github.com:paul-chiggy/knab.git```
2.	Install packages and dependencies with ```npm install```
3.	Run tests with ```npm run test```. Check for more options in ```package.json```
4.	Check CI builds of each branch and PR here: https://app.circleci.com/pipelines/github/paul-chiggy/knab
5. Test reports are either stored locally in ```cypress/results``` folder or published in the Circle CI pipeline and can be switched to HTML etc upon request.

# Improvements
* Fix Login mechanism for UI tests
* Complete Boards feature with complete CRUD checks
* Make use of fixtures for data
* Make use of page object model and update UI tests to use pages
* Separate API tests to check both data (data-driven, parametrized) and contracts.
* Add visual tests for the UI part
* Add a11y tests for the UI part
* Add performance checks for API and UI part (e.g. Lighthouse)
* Add a dockerfile, therefore dokerize the application making it platform-agnostic and more usable locally and in CD
* This can be done in https://dev.azure.com/ having this repo there with a task board, test plan and pipelines sections attacked. Have a private sample at https://dev.azure.com/paul-chiggy/knab