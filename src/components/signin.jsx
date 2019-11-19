import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as action from '../actions';
import { connect } from 'react-redux';

const FIELDS = { email: 'email', password: 'email' };

class Signin extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <div className='row justify-content-mdr-center'>
          <h1>Connexion</h1>
        </div>
        <div className='row justify-content-mdr-center'>
          <fieldset className='col-md-4 form-group'>
            <label className='bmd-label-floating'>Email</label>
            <Field
              name={FIELDS.email}
              component='input'
              type='text'
              className='form-control'
            />
            <Field
              name={FIELDS.password}
              component='input'
              type='password'
              className='form-control'
            />
          </fieldset>
        </div>
        <div className='row justify-content-mdr-center'>
          <button type='submit' className='btn btn-primary btn-raised'>
            Connexion
          </button>
        </div>
      </form>
    );
  }
}

const signinForm = reduxForm({
  form: 'signin',
  fields: Object.keys(FIELDS)
})(Signin);

export default connect(null, actions)(signinForm);
