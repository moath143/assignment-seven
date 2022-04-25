# Assignment seven
In this assignment I used component and props
### The components
* Button => The button inside form component
* Card => h3, p, and image card with props data every card
* Cards => card inside cards component
* Search => search input and icon from fontawesome
* Header => logo and nav menu links
* Form => text, email and phone input
### The App.js
* ```
    <Header />
* ```
    <Cards />
* ```
    <Form />
    ```
    
Finally you can navigate the site from [here](https://assignment-seven-taupe.vercel.app/).

# Topic research about synchronous, asynchronous and promise
## Synchronous
In a synchronous programming model, things happen one at a time.
When you call a function that performs a long running action, it returns only when the
action has finished and it can return the result. This stops your program for
the time the action takes

## Asynchronous 
An asynchronous programming allows multiple things to happen at the same time.
When you start an action, your program continues to run. When the action finishes,
the program is informed and gets access to the result.

## Promise
A promise is an asynchronous action that may complete at some point and produce a value.
Ut is able to notify anyone who is interested when its value is available.
The easiest way to create a promise is by calling Promise.resolve. This
function ensures that the value you give it is wrapped in a promise.
If it's already a promise, it is simply returned otherwise, you get a new promise
that immediately finishes with your value as its result.

```javascript
let fifteen = Promise.resolve(15)
fifteen.then(value => console.log(`Got ${value}`))
// Got 15
```






