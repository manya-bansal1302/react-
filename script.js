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
 
//  const parent = React.createElement("div" , {id : "parent"} ,
//  React.createElement("div" , {id : "child"}, 
//  [React.createElement("h1",{}, "I am a h1 tag"), 
//  React.createElement("h2",{}, "I am a h2 tag")]));
//  console.log(parent);
//  const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(parent);


const parent = React.createElement("div" , {id : "parent"} ,
React.createElement("div" , {id : "child"}, 
[React.createElement("h1",{}, "I am a h1 tag"), 
React.createElement("h2",{}, "I am a h2 tag")]),
React.createElement("div" , {id : "child2"}, 
[React.createElement("h1",{}, "I am a h1 tag"), 
React.createElement("h2",{}, "I am a h2 tag")])
);

 console.log(parent);
 const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent);

 // React code  (one element)
 /*
  const heading = React.createElement("h1", {}, "Hello World From React!");

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(heading);*/

  /*const para = React.createElement(
    "p",
  
    {id: "paragraph", class: "paragraph"},
    "Hey I'm Learning react from namasteh react"
  );
  console.log(para)  //this will return us a object
  const paraRoot = ReactDOM.createRoot(document.getElementById("root"));
  paraRoot.render(para);*/