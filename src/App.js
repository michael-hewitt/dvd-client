import React from 'react';
import './App.css';

const Categories = ({ categories }) => {
  return (
    <div className='categories'>
      <h1>Categories</h1>
       {categories.map((category) =>
           <div className='category' key={category.category_id}>
             {category.name}
           </div>
       )}
     </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    fetch('/api/categories')
      .then(result => result.json())
      .then((data) => {
        this.setState({categories: data})
      })
      .catch(console.log)
  }

  render() {
    return (
        // <div>Hello world.</div>
       <Categories categories={this.state.categories} />
    )
  }
}

export default App;
