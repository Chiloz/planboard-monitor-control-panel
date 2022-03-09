# Planboard Monitor Control Panel
In February of 2022 I joined a project to revamp Sogeti's Planboard Monitor. This tool detects changes in Sogeti's Planboard and sends an email notification to the corresponding managers to whom these changes are important.

For this project, I was responsible for designing and developing the frontend and making sure the application could properly communicate with the API written by our backend team. To give myself a challenge, I chose to develop this application in Angular.

The end result was the Planboard Monitor Control Panel, which you can see in this repository; an Angular-application where each manager can configure on what times and from which units they want to receive email notifications.

## Built with
- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/)

### Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation
1. Make sure you have Node.js installed. If you are unsure if Node.js is installed, run ```$ node -v``` within a terminal.
2. Clone this project's repository to your local machine and move to the new folder.
```
$ git clone https://github.com/noelherwig/planboard-monitor-control-panel.git
$ cd planboard-monitor-control-panel
```
3. Install all required node-modules inside the folder.
```
$ npm install
```

## Usage
Using Node.js, start the application by using the following command in this project's folder using the terminal:
```
$ npm start
```
This will start a development server and open the application in your preferred browser automatically on `http://localhost:4200`. You should now be able to interact with the application.

## Creator(s)
- Noël Herwig - [GitHub](https://github.com/noelherwig)