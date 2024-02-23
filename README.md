# Contributing changes to Kwil Docs

Like other Kwil sources, [Kwil docs](https://github.com/kwilteam/docs) is an open source repository hosted on GitHub, and we welcome pull requests into our repo.

Kwil docs uses [Docusaurus 2](https://docusaurus.io/) as our online document management system.

Before contributing, please familiarize yourself with [Docusaurus markdown](https://docusaurus.io/docs/category/guides) features. If you have used tools such as MkDocs previously, you should find the Docusaurus experience familiar.

## Minor Edits

For minor edits to the existing Kwil docs, e.g., fixing typos, or adding small paragraphs of text, it is recommended to simply:

- Fork the Kwil docs repository

- Use GitHub to edit the page to which you wish to contribute, using markdown

- Push the changes to a new branch

- Issue a pull request into the Kwil docs repository

**Note** : Do NOT use this approach for major contributions such as new pages, adding navigation between pages, adding external content such as images, since your changes will require testing in Docusaurus.

## Prerequisites

### Fork the Kwil docs repository

Make a [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of Kwil docs to your own repo.

### Clone the Kwil Docs repository

If you use git ssh:

`git clone git@github.com:GITUSERNAME/docs.git`

If you use git https:

`git clone https://github.com/GITUSERNAME/docs.git`

where `GITUSERNAME` is your git profile handle.

### Install Node 20.9 or Above

Docusaurus requires Node v20.9 or above.

Kwil recommends you use [nvm](https://github.com/nvm-sh/nvm) to manage your node.js environments.

`nvm install 20`

### Use NPM to fetch package dependencies

As with any node.js app, use [npm](https://www.npmjs.com/) to install all dependency packages

`npm install`

## Running the Kwil docs Docusaurus app

It is recommended that you run the Kwil Docusaurus app while developing new content for the docs, as you will be able to interactively view changes as you make them to the markdown files.

`npm start`

This step should start the node development server and launch a web browser to the home page, e.g.,

`http://localhost:3000/docs/introduction`

## Adding your contribution to Kwil docs

You will need to familiarize yourself with the Docusaurus file layout, categorization, and other features.
Docusaurus provide an interactive [sandbox Playground](https://docusaurus.io/docs/playground) that will help you get up to speed.

When ready, use your favourite Node.js IDE tooling, e.g., VS Code, to add new pages, React.js scripts, CSS styles etc., in accordance with Docusaurus guidelines.

## Committing changes and pushing to a new branch

After you’ve tested your changes:

- Stage any newly added and updated pages

`git add .`

  Note that the above command will add all untracked files, so check for unintended additions.  Otherwise, use `git add -u`, and add new files explicitly.

- Commit your changes to a new branch.

`git commit -m "Add new section for new feature XYZ"`

- Push to a new branch. For branch naming, please use the convention feature/change_short_description

`git push -u origin feature/add_XYZ_section`

## Issuing a Pull Request

Return to the Kwil docs home page in GitHub and navigate to [Pull Requests](https://github.com/kwilteam/docs/pulls).

Click the Compare and pull request button, add a brief description of the changes made, including a motivation for why this will benefit the Kwil community, and then finally click the Create pull request button.

All pull requests will be reviewed as soon as possible, and if accepted, will be merged and published.

Thank you for your contribution!
