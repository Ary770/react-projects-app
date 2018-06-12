import React from 'react';
import { ControlLabel } from 'react-bootstrap'

class CreateProject extends React.Component {
  state = {
    name: '',
    category: '',
    notes: '',
    startBy: '',
    finishBy: '',
  }

  handleChange(event) {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form className='container'>
          <ControlLabel>Project Name:</ControlLabel>
          <div className='form-group'>
            <input
              type="text"
              name='name'
              value={this.state.value}
              onChange={event => this.handleChange(event)}
            />
          </div>

          <ControlLabel>Project Category:</ControlLabel>
          <div className='form-group'>
            <input
              type="text"
              name='category'
              value={this.state.value}
              onChange={event => this.handleChange(event)}
            />
          </div>

          <ControlLabel>Project Notes:</ControlLabel>
          <div className='form-group'>
            <textarea
              name='notes'
              rows="5"
              cols="70"
              value={this.state.value}
              onChange={event => this.handleChange(event)}
            />
          </div>

          <ControlLabel>Start By:</ControlLabel>
          <div className='form-group'>
            <input
              name='startBy'
              value={this.state.value}
              onChange={event => this.handleChange(event)}/>
          </div>

          <ControlLabel>Finish By:</ControlLabel>
          <div className='form-group'>
            <input
              name='finishBy'
              value={this.state.value}
              onChange={event => this.handleChange(event)}/>
          </div>
      </form>
    )
  }
}

export default CreateProject
