import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/fetchCategories';
import { bindActionCreators } from 'redux';

class Categories extends React.Component {
  componentDidMount() {
    if (this.props.categories.length === 0) {
      this.props.actions.fetchCategories()
    }
  }

  nestedProjectsHandler (event, categoryId) {
    // fetch for all nested projects for category.id
    // this.props.actions.fetchNestedProjects(categoryId)
  }

  render () {
    let categories = null;

    if (this.props.categories.length !== 0 ) {
      categories = this.props.categories.map(category =>
        //replace key with category.id
        <h4 key={category.name}>
          <li>
            <a href='' onClick={(event) => this.nestedProjectsHandler(event, category.id)}>
              {category.name}
            </a>
          </li>
        </h4>
      )
    } else {
      categories = <p>Gota add some projects!</p>
    }

    return (
      <div>
        {categories}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    categories: state.projects.categories
  })
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
