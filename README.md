# What is JSX, and why is it used?
###### JSX is a JavaScript XML file. it allow javaScript in HTML file.
###### and it is use for DOM manipulation methodsand it is use for DOM manipulation methods


# What is the difference between State and Props?
###### State use for manage the internal data and behavior of a component 
###### and Props use for configure a component and make it reusable


# What is the useState hook, and how does it work?
###### useState hook allows programmer to add state to functional components.
###### It returns an array with two elements:
1. ###### The current state value.
2. ###### A state setter function that you use to update the state.


# How can you share state between components in React?
###### To share state, move it to the closest common parent, pass it down as props, and pass event handlers down to allow children to change the parent's state.


# How is event handling done in React?
###### Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

1. ###### React events are named using camelCase, rather than lowercase.
2. ###### With JSX you pass a function as the event handler, rather than a string.
