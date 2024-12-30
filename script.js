import React from "react";
import ReactDOM from "react-dom/client";


/* 
*          How to create nested elements in react
*<div id="parent">
*  <div id="child">
*    <h1>I'm h1 tag</h1>
*     <h2>I'm h2 tag</h2>
*  </div>
*  <div id="child2">
*    <h1>I'm h1 tag</h1>
*     <h2>I'm h2 tag</h2>
*  </div>
*</div>
* 
* ReactElememt(Object) => HTML(that browser understands)
*/
 
/**********  React element ************/
/*** React.createElement => ReactElement(creates an object) => (when we render than it becames HTML element) ***/

/*const heading = React.createElement('h1',{id : "heading"}, "React");
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading); */

/*** JSX- is not HTML in JS ***/
/*** JSX (transpiled before it reaches the javaScript engine) - Parcel - Babel ***/
/*** JSX => React.createElement => ReactElement- JS Object => HTMLElement(render) ***/

/*const jxsHeading = <h1 id="heading" >React~ using JSX</h1>
console.log(jxsHeading)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jxsHeading); 

const jxsPara = <p clasName="Para">Hey it's Manya</p>
const para = ReactDOM.createRoot(document.getElementById('para'));
para.render(jxsPara); */


/***                                React Componets                       ***/
/** 1. Class Based Component - Old Way  **/
/** 2. Functional Component - New Way  **/

/************* React Functional Component ****************/
  
/* const Title =  function ()  {
  return (
  <h1 className="head">React</h1>
  );
}; */

/** Component inside Component */
/* const HeadingComponent = () => (
  <div id="container">
    <Title/>
   <h1 className=" heading">React~ Functional Component</h1>
  </div>
) */

/** const HeadingComponent = () => {
  return  <h1>React~ Functional Component</h1>
} **/

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>); */


/** Element inside component **/

const element = <span>JSX</span>

const title =  <h1 className="head"> {element} React</h1>

const HeadingComponent = () => (
  <div id="container">
    { title }
   <h1 className=" heading">React~ Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);