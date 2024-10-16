# Linting ✨

Linting is like having a tiny coding assistant who keeps your code neat and tidy. It's super useful for catching and fixing annoying syntax and style issues before they become major headaches.

The coolest part? The `create-robo` CLI can set you up with a project that's already got all the linting magic you need.

## ESLint 🕵️‍♀️

ESLint is your coding sidekick that helps you find and fix JavaScript and TypeScript errors before they morph into big, nasty bugs. Its mission? To make your code cleaner, more reliable, and more consistent.

To get ESLint up and running in your project, follow the steps in the [ESLint Getting Started guide](https://eslint.org/docs/user-guide/getting-started). If you're using `create-robo`, just choose ESLint during the setup process, and it'll handle everything for you. Nifty, right?

Create a file named `.eslintrc.json` in your project's root directory and add your ESLint configuration:

```json title=".eslintrc.json" showLineNumbers
{
	"extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	"env": {
		"node": true
	},
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint"],
	"root": true,
	"rules": {}
}
```

Oh, and don't forget to create an `.eslintignore` file too. This helps ESLint skip files and folders that don't need linting, like `node_modules`. Just add the following content to the `.eslintignore` file:

```title=".eslintignore" showLineNumbers
node_modules
.config
.robo
```

## Prettier 💅

Prettier is the icing on your code cake! It takes care of all those fiddly formatting bits that can lead to arguments among devs. With Prettier, you'll have a consistent code style across your entire project, making your code a total dream to read and maintain.

To get Prettier set up, head over to the [Prettier Installation guide](https://prettier.io/docs/en/install.html) and follow the steps. Or, you know, just use `create-robo` and let it take care of everything during the setup process. Easy peasy!

Create a file named `prettier.config.js` in your project's root directory and add your Prettier configuration:

```js title="prettier.config.js" showLineNumbers
module.exports = {
	printWidth: 120,
	semi: false,
	singleQuote: true,
	trailingComma: 'none',
	tabWidth: 2,
	useTabs: true
}
```

## Running Linters 🏃‍♂️

If you used `create-robo` to create your project, you can run both ESLint and Prettier with just one command:

```bash
npm run lint
```

But wait, there's more! Many code editors, like [VS Code](https://code.visualstudio.com/), have built-in integrations for ESLint and Prettier. That means you can enjoy real-time linting without even having to run the command. Just install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for VS Code, and you're all set!
