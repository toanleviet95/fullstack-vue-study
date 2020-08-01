# Fullstack Vue

## Single-file components - Calendar App

### Component hierarchy:

```
• App: Parent container
  – CalendarWeek: Displays a row of calendar days
    * CalendarDay: Displays a list of day events · CalendarEvent: Displays a given event
  – CalendarEntry: Displays a form
```

### What we learned:

```
1. Build a static version of the app
Our application starting point was a static implementation of the app. This is always a great
start to building any Vue application.

2. Break the app into components
We mapped out the component structure of our app by examining the app’s working UI. We then used Vue’s single-file components and the single-responsibility principle to break components down so that each had minimal viable functionality.

3. Hard-code initial states with parent-child data flow
By determining in which component each piece of state should live; we passed and referenced
props from higher level components down to their children.

4. Create state actions (and corresponding component dispatchers)
To make our app interactive, we created and centralized all state actions within the app store. We then created our component event listeners to dispatch events to the store which reactively updated our app.

```

### How to run

1. Ensure you have `yarn` installed.

2. Install the dependencies

````
yarn
````

3. Boot the app

````
yarn dev
````

The server is now running - watch the console output for instructions, but by default, your server is now running (with hot reload) at [http://localhost:8080/](http://localhost:8080/)
