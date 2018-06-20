import React from 'react';
import { ControlLabel, Button } from 'react-bootstrap';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addProject } from '../actions/projects';

class CreateProject extends React.Component {
  state = {
    name: '',
    category: '',
    notes: '',
    startBy: '',
    finishBy: '',
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // handleOnSubmit = event => {
  //   event.preventDefault();
  //   const project = Object.assign({}, this.state, { id: uuid() });
  //   this.props.addProject(project);
  //   this.props.history.push('/projects');
  // }

  handleOnSubmit = event => {
    event.preventDefault
    const projectData = {
      ...this.state
    }
    fetch('api/projects', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData)
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render() {
    return (
      <form onSubmit={e => this.handleOnSubmit(e)} className='container'>
          <h1>Create New Project</h1>
          <br></br>
          <ControlLabel >Project Name:</ControlLabel>
          <div className='form-group'>
            <input
              type="text"
              name='name'
              value={this.state.name}
              onChange={event => this.handleChange(event)}
            />
          </div>

          <ControlLabel>Project Category:</ControlLabel>
          <div className='form-group'>
            <input
              type="text"
              name='category'
              value={this.state.category}
              onChange={event => this.handleChange(event)}
            />
          </div>

          <ControlLabel>Project Notes:</ControlLabel>
          <div className='form-group'>
            <textarea
              name='notes'
              rows="5"
              cols="70"
              value={this.state.notes}
              onChange={event => this.handleChange(event)}
            />
          </div>

          <ControlLabel>Start By:</ControlLabel>
          <div className='form-group'>
            <input
              name='startBy'
              value={this.state.startBy}
              onChange={event => this.handleChange(event)}/>
          </div>

          <ControlLabel>Finish By:</ControlLabel>
          <div className='form-group'>
            <input
              name='finishBy'
              value={this.state.finishBy}
              onChange={event => this.handleChange(event)}/>
          </div>
          <Button type='submit' bsStyle="primary">Submit</Button>
      </form>
    )
  }
}

export default connect(null, { addProject })(CreateProject);
