# Excercise by Athos Orío

## The statement of the exercise reads as follows

To complete the knowledge test, you must complete the following goals:

- Create a Login Page.

  You must use the endpoint /api/login request from https://reqres.in/

  This endpoint will return a TOKEN if the access is successful.

- Create a Logout Action

  You should not be able to access the /users view.

- Create a User Table: Use path /users.

  You only can access this view if you are logged.

  You must use /api/users request from https://reqres.in/

- Allow paginating on User Table.

- Allow changing the param per_page: The values must be: [1,2,5,10]

- Unit Testing

- Create custom 404 Error Page

## Run and see the exercise

IMPORTANT NOTE: To login in the application you must use this email address with any password

> eve.holt@reqres.in

You can see the project running on vercel, on this link [https://alea-kappa.vercel.app](https://alea-kappa.vercel.app)

Or, you can run it on your local machine. To start the project you can follow this steps:

- Clone the repo

  `git clone https://github.com/athos54/exercise-react-by-aoc.git`

- Enter on project folder

  `cd exercise-react-by-aoc`

- Install dependencies (have a cup of coffee ☕️ while the dependencies are being installed)

  `npm i`

- Run the project

  `npm start`

To run tests you can do one of this:

- `npm run test`

- `npm run test:coverage:html`

# Possible improvements

On the exercise I have limited myself to doing what was asked for. But, depending the project size, it could be approached from different points of view.

For example, if the final users have diferents languages, will be necesary implement an i18n for translations.

Depending the relations with diferents components and, tree structure, and size of project, we could create diferent context, use redux, or other solutions to manage this.

If the mayority of users are on mobile, then we need think on show the table on a diferent way, to make easy display the table on device.

At the performance level, depending the requeriments, we could think on a static site, generating statics files, avoiding the user download our bundle js, certainly improving first content paint (FCP) and large content paint (LCP)
