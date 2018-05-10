import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import 'typeface-roboto';
import renderHTML from 'react-render-html';


class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/posts')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App" style={{ padding: 20}}>
	<Grid container spacing={24}>
        {this.state.users.map(user =>
		<Grid item xs={6}>
          	<Paper style={{ padding: 10 || text-align: left }} ><h4>{user.subject}</h4>
		 {renderHTML(user.body)}
		</Paper>
		</Grid>
        )}
       </Grid>
	</div>
    );
  }
}

export default App;
