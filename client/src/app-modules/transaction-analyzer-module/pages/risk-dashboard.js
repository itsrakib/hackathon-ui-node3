import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./risk-dashboard.css";
//import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { Container, Row, Col, Card, Button, Badge, pill, bg, Table, sm , Modal } from 'react-bootstrap';

//import CustomForm from "../../../../reusable-components/CustomForm";
import TransactionReport from "./transaction-report";

import { getFradulentTransactions } from "../../../actions/transaction-analyser";


class RiskDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionModalShow: false,
    };
  }

  componentDidMount() {
    this.props.getFradulentTransactions();
  }

  COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  pieData = [
    {
      "name": "USA",
      "value": 68.85
    },
    {
      "name": "Russia",
      "value": 7.91
    },
    {
      "name": "Sweden",
      "value": 6.85
    },
    {
      "name": "Netherlands",
      "value": 6.14
    },
    {
      "name": "Others",
      "value": 10.25
    }
  ];

  CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }

    return null;
  };

  data = [
    {
      "name": "Jan 2021",
      "Non-Fraudulent": 3432,
      "Fraudulent": 2342
    },
    {
      "name": "Feb 2021",
      "Non-Fraudulent": 2342,
      "Fraudulent": 3246
    },
    {
      "name": "Mar 2021",
      "Non-Fraudulent": 4565,
      "Fraudulent": 4556
    },
    {
      "name": "Apr 2021",
      "Non-Fraudulent": 6654,
      "Fraudulent": 4465
    },
    {
      "name": "May 2021",
      "Non-Fraudulent": 8765,
      "Fraudulent": 4553
    }
  ]

  toggleTransactionReportModal = e => {
    this.setState(prevState => ({transactionModalShow : !prevState.transactionModalShow}));
    console.log(" Toggle Transaction Report Modal" ,this.state.transactionModalShow );
    console.log("FraudList" , this.state.fraudTransactions);
    console.log("transactoin",this.props.fraudTransactions);
  }

  


  render() {

    return (
      <div>
        <h1 className="riskHeadeer">Fraud Detection Dashboard</h1>

        <Container>

          <Row style={{ paddingBottom: "15px" }}>
            <Col>
              <Card style={{ minWidth: '18rem', backgroundImage: "linear-gradient(to right, rgb(49, 231, 245),rgb(137, 142, 245)" }}>
                <Card.Body>
                  <Card.Title>Total POS Devices</Card.Title>
                  <Card.Text style={{ fontSize: "18px", color: "white" }}>
                    1230 Devices
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ minWidth: '18rem', backgroundImage: "linear-gradient(to right, rgb(37, 245, 82), rgb(110, 204, 127)" }}>
                <Card.Body>
                  <Card.Title>Total Cards</Card.Title>
                  <Card.Text style={{ fontSize: "18px", color: "white" }}>
                    100M+ Cards
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ minWidth: '18rem', backgroundImage: "linear-gradient(to right, rgb(217, 102, 213), rgb(242, 206, 241)" }}>
                <Card.Body>
                  <Card.Title>Reported Fraud Transactions</Card.Title>
                  <Card.Text style={{ fontSize: "18px", color: "white" }}>
                    91231 Transactions
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>



            <Col>
              <Card style={{ minWidth: '18rem', backgroundImage: "linear-gradient(to right, rgb(247, 37, 86), rgb(217, 156, 161)" }}>
                <Card.Body>
                  <Card.Title>Fraudulent POS Devices</Card.Title>
                  <Card.Text style={{ fontSize: "18px", color: "white" }}>
                    20 Devices
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>


          <Row style={{ paddingTop: "50px" }}>
            <Col>
              <Card style={{ backgroundImage: "linear-gradient(to right, orangered, orange", color: "white", height: "180px" }}>
                <Card.Body>
                  <Card.Title style={{ color: "darkred" }}> Key Stats -  Daily Transaction Summary</Card.Title>
                  <Card.Text style={{ color: "white" }}>

                    <Row>
                      <Col>
                        <div style={{ fontSize: "45px", padding: "20px", width: "190px", color: "yellow" }}> 15 %</div>
                        <div style={{ fontSize: "14px", padding: "1px" }}> Reported Fraud Transactions</div>
                      </Col>

                      <Col>
                        <div style={{ fontSize: "14px", padding: "1px" }}>
                          Total Transactions
                            <div style={{ fontSize: "20px", color: "darkred" }}> 100 </div>
                        </div >
                        <div style={{ fontSize: "14px", padding: "1px" }}>
                          Fraudulent Transactions  <div style={{ fontSize: "20px", color: "darkred" }}> 20 </div>
                        </div>
                      </Col>
                    </Row>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={7}>
              <LineChart width={600} height={200} data={this.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Non-Fraudulent" stroke="#0095FF" />
                <Line type="monotone" dataKey="Fraudulent" stroke="#FF0000" />
              </LineChart>
            </Col>
          </Row>

          <Row style={{ paddingTop: "25px" }}>


            <Col xs={7}>
              <Card style={{ minWidth: '18rem', backgroundImage: "linear-gradient(180deg, rgb(198, 242, 247), rgb(137, 204, 245)" }}>
                <Card.Body >
                  <Card.Title> <span style={{ float: "left" }}>Fraud Transactions Reported  </span>
                    <span className="modButton" onClick={this.toggleTransactionReportModal}> Work List</span>
                    <TransactionReport
                      show={this.state.transactionModalShow}
                      onHide={this.toggleTransactionReportModal}
                      fraudlist={this.props.fraudTransactions}
                    />
                  </Card.Title>
                  <Card.Text style={{ fontSize: "18px", color: "blue", paddingTop: "20px" }}>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Transaction ID</th>
                          <th>Card Holder</th>
                          <th>Amount</th>
                          <th>Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>7191-1231-1231</td>
                          <td>Mark Twain</td>
                          <td>199.99</td>
                          <td>Kolkata</td>
                        </tr>
                        <tr>
                          <td>7191-1231-1232</td>
                          <td>John Smith</td>
                          <td>5999.99</td>
                          <td>Mumbai</td>
                        </tr>
                        <tr>
                          <td>7191-1231-1221</td>
                          <td>Wills Daverson</td>
                          <td>8199.99</td>
                          <td>Chennai</td>
                        </tr>
                        <tr>
                          <td>7191-1231-1123</td>
                          <td>Peter Parker</td>
                          <td>7163.99</td>
                          <td>Kolkata</td>
                        </tr>
                        <tr>
                          <td>7191-1231-5711</td>
                          <td>Cynthia Hildner</td>
                          <td>9121.99</td>
                          <td>Bangalore</td>
                        </tr>
                        <tr>
                          <td>7191-1231-6711</td>
                          <td>Robert White</td>
                          <td>7799.99</td>
                          <td>Chennai</td>
                        </tr>
                        <tr>
                          <td>7191-1231-8218</td>
                          <td>Jeremy Wallace</td>
                          <td>12399.99</td>
                          <td>Kochi</td>
                        </tr>

                      </tbody>
                    </Table>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>



            <Col>
              <Card style={{ minWidth: '18rem', backgroundImage: "linear-gradient(180deg, rgb(148, 245, 100), #00FA9A" }}>
                <Card.Body>

                  <Card.Title> <span style={{ float: "left" }}>POS Devices Report - Current Month  </span>
                    <span style={{ float: "right", backgroundColor: "green", color: "turquoise", padding: "5px", fontSize: "12px", borderRadius: "5px" }}> View All</span>
                  </Card.Title>

                  <Card.Text style={{ fontSize: "18px", color: "darkgrey", paddingTop: "20px" }}>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>POS ID</th>
                          <th>Location</th>
                          <th>Total Transaction</th>
                          <th>Fraud Transaction</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1011</td>
                          <td>Kolkata</td>
                          <td>6352</td>
                          <td>10</td>
                        </tr>
                        <tr>
                          <td>8126</td>
                          <td>Bangalore</td>
                          <td>7282</td>
                          <td>27</td>
                        </tr>
                        <tr>
                          <td>7151</td>
                          <td>Bangalore</td>
                          <td>88</td>
                          <td>12</td>
                        </tr>
                        <tr>
                          <td>5511</td>
                          <td>Mumbai</td>
                          <td>128</td>
                          <td>10</td>
                        </tr>
                        <tr>
                          <td>5598</td>
                          <td>Chennai</td>
                          <td>233</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>1861</td>
                          <td>Kolkata</td>
                          <td>12139</td>
                          <td>123</td>
                        </tr>
                        <tr>
                          <td>4411</td>
                          <td>Mumbai</td>
                          <td>3026</td>
                          <td>10</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ padding: "20px" }}>

            <Col>
              <Row style={{ paddingTop: "20px", borderRadius: "2rem", backgroundImage: "linear-gradient(30deg, #DA70D6 ,#D8BFD8,	#DA70D6 , #D8BFD8" }}>
                <Col>
                  <Card>                
                    <Card.Body>
                    <h4 style={{color:"blue"}}>Fraudulent Transactions</h4>
                      <Table hover size="sm" style={{height:"170px" , overflowY : "scroll" , display : "block"}}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Country</th>
                            <th>Total Transactions</th>
                            <th>Fradulent Transaction</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>USA</td>
                            <td>60%</td>
                            <td>20%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Russia</td>
                            <td>34%</td>
                            <td>12%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>UAE</td>
                            <td>63%</td>
                            <td>23%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Sweden</td>
                            <td>30%</td>
                            <td>13%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Netherlands</td>
                            <td>20%</td>
                            <td>60%</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Others</td>
                            <td>20%</td>
                            <td>60%</td>
                          </tr>                                                                                                     
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6}>
                  <div>                    
                    <PieChart width={530} height={270}>
                      <Pie data={this.pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                        {
                          this.pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                        }
                      </Pie>
                      <Tooltip content={<this.CustomTooltip />} />
                      <Legend/>
                    </PieChart>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>

        <h1 className="riskHeadeer">  </h1>
      </div>
    )
  }
}

const mapStateToProps = ({ TransactionAnalyserReducer }) => {

  //console.log("transactionReducer --" , TransactionAnalyserReducer.FraudTransactionList );
   return {
      fraudTransactions : TransactionAnalyserReducer.FraudTransactionList
   };
};

export default withRouter(
  connect(mapStateToProps, { 
       getFradulentTransactions 
     })( RiskDashboard)
);

//export default withRouter(RiskDashboard);