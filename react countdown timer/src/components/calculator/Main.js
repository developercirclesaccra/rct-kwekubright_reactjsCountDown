import React from 'react';
import Classes from './css/style.css';
import Form from './Form.js';


class Wrapper extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="calcWrapper">
        
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="" style={{paddingTop:'20px'}}>
                               <h3> ReactJS Count Down Timer</h3>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="jumbotron">
                                
                            </div>
                        </div>
                    </div>
                    
                    <Form sysState={this.props.sysState}> </Form>
                    {console.log(this.props.sysState)}
        
        
                </div>
        
            </div>
          )
    }
  
}

export default Wrapper;
