import React from 'react';


class Buttons extends React.Component{

    constructor(props) {
        super(props);

        this.startBtnClicked = this.startBtnClicked.bind(this);
        this.pauseBtnClicked = this.pauseBtnClicked.bind(this);
        this.stopBtnClicked  = this.stopBtnClicked.bind(this);
        this.resetBtnClicked = this.resetBtnClicked.bind(this);
        console.log("buttonProps below");
        console.log(props);
    }

    startBtnClicked(event){
        this.props.sysState.started  = true;
        this.props.sysState.paused   = false;
        this.props.sysState.stopped  = false;
        this.props.sysState.resetted = false;

        console.log(this.props.sysState);
    }

    pauseBtnClicked(){
        this.props.sysState.started  = false;
        this.props.sysState.paused   = true;
        this.props.sysState.stopped  = false;
        this.props.sysState.resetted = false;

        console.log(this.props.sysState);
    }

    stopBtnClicked(){
        this.props.sysState.started  = false;
        this.props.sysState.paused   = false;
        this.props.sysState.stopped  = true;
        this.props.sysState.resetted = false;

        console.log(this.props.sysState);
    }

    resetBtnClicked(){
        this.props.sysState.started  = false;
        this.props.sysState.paused   = false;
        this.props.sysState.stopped  = false;
        this.props.sysState.resetted = true;

        console.log(this.props.sysState);
    }

    render(){
        return (
            <div className="row" style={{marginTop:"50px"}}>
                <div className="col-md-3">
                    <button type="submit" className="btn btn-success mb-2" onClick={this.startBtnClicked}> Start</button>
                </div>

                <div className="col-md-3">
                    <button type="submit" className="btn btn-warning mb-2" onClick={this.pauseBtnClicked}>Pause</button>
                </div>

                <div className="col-md-3">
                    <button type="submit" className="btn btn-danger mb-2" onClick={this.stopBtnClicked}>Stop</button>
                </div>

                <div className="col-md-3">
                    <button type="submit" className="btn btn-primary mb-2" onClick={this.resetBtnClicked}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Buttons;