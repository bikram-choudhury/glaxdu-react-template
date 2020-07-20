This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) Folder structure and configured with webpack.

> This is the **demo version for glaxdu template**. i.e: (_does not contain all views or features of the original template_)

## Available Scripts

In the project directory, you can run:

### Runs the app in the development mode.

- `cd client`
- navigate to `glaxdu-settings.js`.
- uncomment `line: 132` and comment `line: 133`
- `cd ../server`
- `npm run dev`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Runs the app in the production mode.

- `cd client`
- navigate to `glaxdu-settings.js`.
- comment `line: 132` and uncomment `line: 133`
- `npm run build`
- `cd ../server`
- `npm start`

Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will not reload if you make edits.<br />
You will also see any lint errors in the console.

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment in heroku using heroku-cli

- `cd client`
- `npm run build`
- `cd ../server`
- `herkou login -i`
- `git init` *(Required for 1st time deployment)*
- `git add .`
- `git commit -am "new message"`
- `git push heroku master`
