# SIGN UP PROJECT

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0.

It consits in a single page app with a sign-up form.
The form should allow users to enter first name, last name, email, and password, and all the fields
are required.
• Password validation:
o Should be a minimum of eight characters,
o Should contain lower and uppercase letters,
o Should not contain user’s first or last name.

• Email validate used pattern and asyncronous validation checking if it is registered emulating api call.
• The form send a POST request to https://demo-api.now.sh/users with the below request body example:

{ firstName: "Eimard", lastName: "Sobrino", email: "eimard@sobrino.co.uk" }

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install nodeJS version 12.18.3 and NPM (installing node, npm will be automatically installed too)

```
https://nodejs.org/en/

```

If you have node js installed, the next step is installing the Angular CLI itself to your computer. 
Run in the console the below command line (global and locally):

```
`npm install -g @angular/cli@9.0.0`

```

Install Angular dev dependencies
```
`npm install @angular/animations@9.0.0 @angular/common@9.0.0 @angular/compiler@9.0.0 @angular/core@9.0.0 @angular/forms@9.0.0 @angular/platform-browser@9.0.0 @angular/platform-browser-dynamic@9.0.0 @angular/platform-server@9.0.0 @angular/router@9.0.0`

```
Install Json server via npm global and locally where considered
```
`npm install -g json-server`
`npm install json-server`

```

Install webpack analyzer
```
`npm i -D webpack-bundle-analyzer`
```

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the url repository in your local where considered by running git clone.

```
`git clone "<url>"`
```

Open a terminal in the root directory of the project and install all the dependencies (node_modules folder will
be generated) via npm as follows:

```
`npm install`
```

Once instalation has finished. If Json server has been installed yet, in that terminal run the mocks as follows:
(Important to use the proper node version mentioned above)

```
`npm run mock:server`
```

Open other terminal in the root directory of the project and run the below command line to run the project and the local server.

```
`ng serve -o`
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running the tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

A karma browser will be displayed with the result and report.

### Break down into end to end tests

Due to lack of time, I could not develop all kind of tests as I would like:

- Isolated
- Shadow
- Integrated

You can find some isolated tests within this version.

Example:
```
At component initial state --> form should be invalid
```
```
If email is empty --> form should be invalid
```

### And coding style tests

I did not have time to add shadow tests

```
If the form is invalid --> form element should contains error class
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Running Web Pack Analitys

It could help us to understand the content of the Javascript bundles produced during the prod build which is very useful when debugging correct structure and therefore architecture of our app!

```
npm run analyze
```
Check in browser: http://127.0.0.1:8888/

## Versioning

First Version

## Authors

* **Eimard Sobrino Zurera** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

Have a look at his:
- linkeidn profile [linkedin](linkedin.com/in/eimardsobrinozurera) 

- official web site [eszSoftware](https://eimardsobrinozurera.com/#/home) 
- [developerStory](https://stackoverflow.com/story/eimard) 

## License

This project is licensed under personal license. Check with Eimard to learn more!

## Acknowledgments

* Architecture used give us a pertect balance between small bundle size/performance and amazing user experience
* I tried to use different kind of approach to achieve the goals 
* I like to avoid css libraries which gives me total independence and flexibility (feel free to integrate 
CSS grid, angular material GRID, Bootstrap GRID)
* CSS: Nomenclature BEM applied
* I applied principles of WEb Accessibility (WCAG)
* Use of Web Pack analytics





