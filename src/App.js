import React, { Component } from 'react';
import './App.css';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';


class App extends Component {

  render() {
    return (

      <Form className="form-style">
        <FormGroup>
          <div>
            <Label className="labelClass" >Basefare </Label>
          </div>

          <div>
            <Input id="Basefare" type="number" onChange={this.props.baseFareValue} placeholder="Basefare" />
          </div>

        </FormGroup>

        <FormGroup>
          <div>
            <Label className="labelClass"> GST </Label>
          </div>
          <div>
            <Input type="number" value={this.props.a.GST} id="GST" placeholder="Your GST..."
            />
          </div>
        </FormGroup>

        <Label> Total  :  </Label>
        {this.props.a.total}


        <div style={{ textAlign: "center" }}>
          <Button color="primary">Save</Button>
        </div>
      </Form>




    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    a: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    baseFareValue: (e) => dispatch({ type: 'BSFVALUE', data: e.target.value })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);