import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./card-transaction-rules.css"
import { right } from "@popperjs/core";
import { RULE_MANAGEMENT_ICON } from "../../../app-constant/images";
import Axios from "axios";
import Toast from 'react-bootstrap/Toast';

//import CustomForm from "../../../../reusable-components/CustomForm";

class CardTransactionRules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count_rule_active : true,
      count_rule_limit : 3,
      amount_rule_active : true,
      amount_rule_limit : 2000,
      pincode_rule_active: true,
      pincode_rule_code : "700156",
      time_rule_status : true,
      time_rule_start_time : "10PM",
      time_rule_end_time : "5AM",
      loading: false,
      show: false
    }
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("submit --- ");
    
    const {
      count_rule_active,
      count_rule_limit,
      amount_rule_active,
      amount_rule_limit,
      pincode_rule_active,
      pincode_rule_code,
      time_rule_status,
      time_rule_start_time ,
      time_rule_end_time,
      loading
    } = this.state;

    console.log("values",{
      count_rule_active,
      count_rule_limit,
      amount_rule_active,
      amount_rule_limit,
      pincode_rule_active,
      pincode_rule_code,
      time_rule_status,
      time_rule_start_time ,
      time_rule_end_time,
      loading
    });

    this.setShow(true);

  } 

  onChange = e  => {
    this.setState({...this.state, [e.target.name] : e.target.value});
  }

  setShow = e => {
    this.setState({...this.state,show:e});
  }


  getUser = async Username => {
    this.setState({ loading: true });

    const res = await Axios.get(
      `https://api.github.com/users/$(username)?client_id=${
      process.env.REACT_CLIENT_ID
      }&client_secret=${process.env.REACT_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  }

  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const {
      count_rule_active,
      count_rule_limit,
      amount_rule_active,
      amount_rule_limit,
      pincode_rule_active,
      pincode_rule_code,
      time_rule_status,
      time_rule_start_time ,
      time_rule_end_time,
      loading,
      show
    } = this.state;

    return (
      <div className="container">
        <div style={{ height: "110px", maxWidth: "100%", backgroundColor: "lavender" }}>
          <h1> <img className="manage-rules-img" src={RULE_MANAGEMENT_ICON} alt="manage-rules-icon" /> Manage Transaction Rules</h1>

        </div>
        <div style={{ paddingTop: "15px" }}>
          <div style={{ border: "1px solid lavender" }}></div>
          <form onSubmit={this.onSubmit}>
            <div className="loader"></div>
            <div className="card-outer">
              <div className="card-line">
                <div className="row">
                  <div className="col-sm-1" style={{ width: "10px" }}>
                  <input className="form-control" type="checkbox"
                     name="count_rule_active"                      
                     checked={count_rule_active} 
                     onChange={(e) => {
                      this.onChange({
                        target: {
                          name: e.target.name,
                          value: e.target.checked,
                        },
                      });
                    }} />                   
                  </div>
                  <div className="col-sm-5 fieldCenter">
                    Transactions per Hour
                </div>
                  <div className="col-sm-2 fieldCenter" style={{ alignContent: "right", paddingRight: "0px", textAlign: "right" }}>
                    Max :
                </div>
                  <div className="col-sm-3" style={{ width: "10px" }}>
                    <input type="text" className="form-control" name="count_rule_limit" value={count_rule_limit} onChange={this.onChange} placeholder="UpperLimit" />
                  </div>

                </div>
              </div>
            </div>

            <div className="card-outer">
              <div className="card-line">
                <div className="row">
                  <div className="col-sm-1" style={{ width: "10px" }}>
                    <input type="checkbox"
                     name="amount_rule_active"
                     className="form-control"                      
                     checked={amount_rule_active} 
                     onChange={(e) => {
                      this.onChange({
                        target: {
                          name: e.target.name,
                          value: e.target.checked,
                        },
                      });
                    }} />
                  </div>
                  <div className="col-sm-5 fieldCenter">
                    Transaction Amount
                </div>
                  <div className="col-sm-2 fieldCenter" style={{ alignContent: "right", paddingRight: "0px", textAlign: "right" }}>
                    Max Amount :
                </div>
                  <div className="col-sm-3" style={{ width: "10px" }}>
                    <input type="text" className="form-control" name="amount_rule_limit" value={amount_rule_limit} placeholder="UpperLimit" onChange={this.onChange}/>
                  </div>

                </div>
              </div>
            </div>

            <div className="card-outer">
              <div className="card-line">
                <div className="row">
                  <div className="col-sm-1" style={{ width: "10px" }}>
                  <input type="checkbox"
                     name="pincode_rule_active"                      
                     checked={pincode_rule_active} 
                     className="form-control"
                     onChange={(e) => {
                      this.onChange({
                        target: {
                          name: e.target.name,
                          value: e.target.checked,
                        },
                      });
                    }} />                   
                  </div>
                  <div className="col-sm-5 fieldCenter">
                    Address Validation
                </div>
                  <div className="col-sm-2 fieldCenter" style={{ alignContent: "right", paddingRight: "0px", textAlign: "right" }}>
                    ZipCode :
                </div>
                  <div className="col-sm-3" style={{ width: "10px" }}>
                    <input type="text" className="form-control" name="pincode_rule_code" value={pincode_rule_code} placeholder="UpperLimit"  onChange={this.onChange}/>
                  </div>

                </div>
              </div>
            </div>

            <div className="card-outer">
              <div className="card-line">
                <div className="row">
                  <div className="col-sm-1 fieldCenter" style={{ width: "10px" }}>
                  <input type="checkbox"                
                     name="time_rule_status"                      
                     checked={time_rule_status}
                     className="form-control" 
                     onChange={(e) => {
                      this.onChange({
                        target: {
                          name: e.target.name,
                          value: e.target.checked,
                        },
                      });
                    }} />                     
                  </div>
                  <div className="col-sm-5 fieldCenter">
                    Time of Transaction
                </div>
                  <div className="col-sm-3" >
                    Start Time : &nbsp;
                    <select className="form-control" name="time_rule_start_time" value={time_rule_start_time} onChange={this.onChange}>
                        <option value="9PM">09:00 PM</option>
                        <option value="10PM">10:00 PM</option>
                        <option value="11PM">11:00 PM</option>
                        <option value="1AM">01:00 AM</option>
                    </select>
                    
                  </div>
                  <div className="col-sm-3" style={{ width: "10px" }}>
                    End Time :  &nbsp;
                      <select className="form-control" name="time_rule_end_time" value={time_rule_end_time} onChange={this.onChange}>
                        <option value="4AM">04:00 AM</option>
                        <option value="5AM">05:00 AM</option>
                        <option value="6AM">06:00 AM</option>
                        <option value="7AM">07:00 AM</option>
                      </select>
                  </div>

                </div>
              </div>
            </div>
             <div style={{paddingTop:"15px"}}>
             <input type="submit" className="btn btn-primary" value="Set Rules"></input>
             </div> <div style={{paddingTop:"15px"}}>
             <Toast onClose={() => this.setShow(false)} show={show} delay={3000} autohide>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Message</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Rules are successfully updated and Activated ! </Toast.Body>
            </Toast>

             </div>
              
          </form>
        </div>

      </div>
    )
  }
}

export default withRouter(CardTransactionRules);