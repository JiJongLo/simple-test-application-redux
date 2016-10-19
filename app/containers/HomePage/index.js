import React, {Component} from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import _ from 'lodash';
import {
  getSomeData,
  setCompany,
} from './actions';

class HomePage extends React.Component {
  componentDidMount(){
   this.props.getData();
  }
  handleChange = (event, index, value) => {
    this.props.setNewCompany(value);
  };
  render() {
    const items =  _.map(_.uniqBy(this.props.data , 'carrier'),(obj)=>{
    return <MenuItem value={obj.carrier} key={obj.id} primaryText={` ${obj.carrier}`} />
    });
    items.push(<MenuItem value="All companies" key={1000400} primaryText="All companies" />);
    return (
    <MuiThemeProvider>
      <div>
      <AppBar
        title="Flights"
        iconElementRight={
          <SelectField value={this.props.current} onChange={this.handleChange}>
          {items}
        </SelectField>
        }
      />

      </div>
    </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state)=>{
  return state.get('mock').toJS();
};

function mapDispatchToProps(dispatch) {
  return {
    getData: () => {
      dispatch(getSomeData())
    },
    setNewCompany : (name) => {
    dispatch(setCompany(name))
  },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
