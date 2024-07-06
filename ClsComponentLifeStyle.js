import react from'react';
class ClsComponentLifecycle extends react.Component{
    constructor(props){
        super(props)
        this.state={name:''};
        this.fnUpdateName=this.fnUpdateName.bind(this);
        this.fnUpdateName1=this.fnUpdateName1.bind(this);
    }
    fnUpdateName(event){
        this.setState({Name:event.target.value})
    }
    fnUpdateName(event){
        alert("name is:"+)
        this.setState({Name:event.target.value})
    
    }
}