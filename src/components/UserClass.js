import React from "react";

//class based component
class UserClass extends React.Component{

  constructor(props) {
    super(props);
    
    this.state = {
      userInfo : {
        name: "Dummy",
        location: "Default",
      }
    };
  // console.log(this.props.name + "child constructor")
  }

   async componentDidMount() {
   //console.log(this.props.name + "child component did mount")


    //API CALL
    const data = await fetch("https://api.github.com/users/manya-bansal1302");
    const json = await data.json();
console.log("json: ", json)
    this.setState({
      userInfo : json,
    })

   // console.log(json)
  }

   componentDidUpdate(){
    //console.log("Component Did Update")
   }

   componentWillUnmount(){
    //console.log("Component Will Unmount")
   }

  render() {
  
  //console.log( this.props.name + "child render")
  
  const {login,id,avatar_url} = this.state.userInfo;
console.log("this.state.userInfo: ", this.state.userInfo)
    return <div className="user-card">
       <img src={avatar_url}/>
       <h2>Name: {login}</h2>
       <h3>Id: {id}</h3>
       <h3>Contact: 7843452786</h3>
  </div>
  }
}

export default UserClass;