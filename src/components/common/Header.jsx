import React, { Component } from "react";
import AddressButton from './AddressButton';
import { Row, Col } from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button } from 'react-bootstrap';



class e2pHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            showDetails: false
        };
    }

    _openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    render() {
        return (
            <div style={{borderBottom: '1px solid #f5f5f5'}}>
                <Row style={{ height: 44, display: 'block', margin: 'auto', backgroundColor: 'white', alignItems: 'center', borderTop: '2px solid #f5f5f5', marginBottom: 10 }}>
                    <Col xs={3}>
                        <Link style={{ textDecoration: 'none' }} to="/">
                            <div style={{ width: 55, height: 29, fontFamily: "SF Display Black", color: "black", fontSize: 24, textTransform: 'uppercase', letterSpacing: 3.1, textAlign: 'center', marginTop: 9 }}>
                                E2P
		</div>

        
                        </Link>
                    </Col>
                    <Col xs={6}>
                        <div style={{ marginTop: 13, textAlign: 'center' }}>
			  
                          <AddressButton
			     className={'addressButton'}
			     active={this.state.showDetails}
			     color={(this.props.networkId == "1" ? "#2bc64f" : "orange")}
			     networkName={this.props.networkName}
			     networkId={this.props.networkId} 
			     handleClick={() => this.setState({
				 height: this.state.showDetails ? 0 : 110,
				 showDetails: !this.state.showDetails
			    })}
			    address={this.props.address} />                             
                        </div>
                    </Col>
                    <Col xs={3} style={{paddingLeft:0}}>
                        <div style={{ right: 0, marginTop: 16, float: 'right', fontFamily: "SF Display Bold" }}>
                            <div style={{ float: "left", fontSize: 12 }}>
                                {this.props.balance}
                            </div>
                            <div style={{ float: "left", fontSize: 12, fontFamily: "SF Display Regular", fontWeight: 400, color: '#a9a9a9', marginLeft: 2 }}>
                                ETH
                  </div>
                        </div>
                    </Col>
                </Row>
                <HeaderDetails
		   address={this.props.address}
		   contract={this.props.contractAddress}
		   networkName={this.props.networkName}
		   networkId={this.props.networkId}
		   height={this.state.height} />
            </div>

        );
    }
}

const HeaderDetails = ({ height, address, contract, networkName, networkId }) => {
    return (
        <div style={{ height: height, width: "91%", overflow: 'hidden', display: 'flex', justifyContent: 'space-between', alignItems: 'left', flexDirection: 'column', margin: "auto", textAlign: "left", marginBottom: 15 }}>
          <div>
              <div style={styles.headerDetailsGrey}>
                ADDRESS
	      </div>
              <div style={styles.headerDetailsGreen}>
                {address}
	      </div>
          </div>
            <div>
              <div style={styles.headerDetailsGrey}>
                CONTRACT
	      </div>
              <div style={styles.headerDetailsBlack}>
                {contract}
              </div>
            </div><div>
              <div style={styles.headerDetailsGrey}>
                NETWORK
              </div>
              <div style={styles.headerDetailsBlack}>
                {networkName}
		<i style={{color: (networkId=='1' ? '#2bc64f' : 'orange'), marginLeft: 5}} className="fa fa-circle"></i>
              </div>
            </div>

        </div>
    )
}

const styles = {
    headerDetailsBlack: { fontSize: 12, fontFamily: "SF Display Bold" },
    headerDetailsGrey: { fontSize: 12, fontFamily: "SF Display Bold", color: '#a9a9a9' },
    headerDetailsGreen: { fontSize: 12, fontFamily: "SF Display Bold", color: "#2bc64f" }
    
    
}


export default e2pHeader;
