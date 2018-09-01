import React from 'react';
import Buttons from './Buttons.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class Form extends React.Component {

  selected = null;
    constructor(props) {
        super(props);
        this.props.sysState.value = "";
        this.props.sysState.sltdDate = moment();
        this.props.sysState.startDate = moment();
        this.selected = this.props.sysState.startDate ;
        
    
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleDpChange  = this.handleDpChange.bind(this);

        console.log(this.props);
      }
    
      handleFormChange(event) {
        this.props.sysState.value = event.target.value;
      }
    
      handleFormSubmit(event) {
        alert('A name was submitted: ' + this.props.sysState.value);
        event.preventDefault();
      }

      handleDpChange(event){
          console.log(event._d);
          this.selected = event._d;
          this.selected.sysState = moment(event._d);
          //this.props.sysState.sysState = event._d;          

      }


    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form className="form-inline" onSubmit={this.handleFormSubmit}>
                            <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>

                            <input type="text" className="form-control" placeholder="Enter Time in Seconds"/>


                            <button type="submit" className="btn btn-success mb-2" style={{marginLeft: "20px"}}>Click Here To Start</button>
                        </form>
                    </div>
                </div>

                <Buttons sysState={this.props}> </Buttons>
            </div>
        );

    }
}

export default Form;