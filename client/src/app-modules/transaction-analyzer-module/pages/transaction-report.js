
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Badge, pill, bg, Table, sm, Modal } from 'react-bootstrap';
import "./transaction-report.css";
import axios from "axios";
//import { useState } from 'react';

const TransactionReport = (props) => {

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const [pageWorkList, setPageWorkList] = useState([]);
  const [pageChunks, setPageChunks] = useState([]);


  useEffect(() => {
    const splitArrayIntoChunksOfLen = () => {
      let chunks = [], i = 0, n = props.fraudlist.length;
      while (i < n) {
        chunks.push(props.fraudlist.slice(i, i += pageSize));
      }
      // console.log("chunks" , chunks);     
      setPageChunks(chunks);
      //  console.log("pgeChunks", pageChunks);
      setPageWorkList(chunks[pageNumber - 1]);
      // console.log("pageWorklist", pageWorkList);    
    }
    splitArrayIntoChunksOfLen();
    setPageCount(Math.ceil(props.fraudlist.length / pageSize));
  }, [pageNumber, pageSize, props.fraudlist]);


  const nextPage = (e) => {

    if (props.fraudlist.length > 0) {
      let currentPage = pageNumber;
      let newPage = currentPage + 1;
      if (newPage > pageCount) {
        setPageNumber(1)
      } else {
        setPageNumber(newPage);
      }
    }
  }

  const prevPage = (e) => {
    if (props.fraudlist.length > 0) {
      let currentPage = pageNumber;
      let newPage = currentPage - 1;
      if (newPage <= 0) {
        setPageNumber(pageCount)
      } else {
        setPageNumber(newPage);
      }
    }

  }




  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{color:"white"}}>
             Fradulent Transaction List
          </Modal.Title>        
      </Modal.Header>
      <Modal.Body>

        <Table striped hover>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Card Holder</th>
              <th>Amount</th>
              <th>Card Type</th>
              <th>Category</th>
              <th>ZipCode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              pageWorkList && pageWorkList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td style={{ textTransform: "capitalize" }}>{item._id.$oid}</td>
                    <td style={{ textTransform: "capitalize" }}> {item.name}</td>
                    <td style={{ textTransform: "capitalize" }}>{item.amount}</td>
                    <td style={{ textTransform: "capitalize" }}>{item.card_type} </td>
                    <td style={{ textTransform: "capitalize" }}>{item.merchant_category} </td>
                    <td style={{ textTransform: "capitalize" }}>{item.zip_code} </td>
                    <td>
                      <span style={{ padding: "3px" }}><i className="fas fa-check-circle action-icon" style={{ color: "green" }}></i></span>
                      <span style={{ padding: "3px" }}><i className="far fa-times-circle action-icon" style={{ color: "red" }}></i></span>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>

        
        
        <button className="btn" style={{ backgroundColor: "blue" }} onClick={prevPage}><i className="fa fa-chevron-left" style={{ color: "white" }} ></i></button>
        <span style={{ width: "200px" , textAlign:"center" }} >  Page : {pageNumber} / {pageCount}  </span>
        
        <button className="btn" style={{ backgroundColor: "blue" }} onClick={nextPage}><i className="fa fa-chevron-right" style={{ color: "white" }}></i></button>
        <span style={{ width: "200px" }}></span>
        <div style={{ float: "right" }}>
          <Button onClick={props.onHide}>Close</Button>
        </div>

      </Modal.Footer>
    </Modal>
  );
}


export default TransactionReport;