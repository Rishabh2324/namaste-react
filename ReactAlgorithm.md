## Reconcilliation Algorithm

## This is also known as React Fibre

## Working :

React has a virtual DOM . Virtaul is not an DOM. Virtual DOM is representation of actual DOM. Virtual DOM is bascially Object...or react element..If you console.log(<Component />)..you will see a object on console ...which is a normal Javascript Object..This object has properties like Keys, props,state,childrens and children will have their own object of childrens forming a tree like structure

## Diff Algorithm

Diff Algorithm looks out difference between old virtual DOM and new Virtual DOM and update the DOM accordingly on every render cycle..
This algorithm was introduced in react-16 named as React Fibre

### Read more here

https://github.com/acdlite/react-fiber-architecture

### Why you should not use index as keys

https://legacy.reactjs.org/docs/lists-and-keys.html
