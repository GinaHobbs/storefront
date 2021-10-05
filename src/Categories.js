// function Categories() {
import { connect } from 'react-redux';
import { display } from './store/categories.js';

  const ActiveCategory = props => {
    return (
      <section>
        <ul>
          {props.categories.categories.map(category => {
            return <li onClick={() => props.display(category.normalizedName)} key={category.normalizedName}>
              {category.normalizedName} - {category.description}
            </li>
          })}
        </ul>
      </section>
    )
  }

  const mapStateToProps = state => ({
    categories: state.categories
  })
  
  const mapDispatchToProps = { display };
  
  // this is the same as above - above is shorthand
  // const mapDispatchToProps = ({
  //   increment: dispatch(increment()),
  //   reset: dispatch(reset())
  // })
  
  export default connect(mapStateToProps, mapDispatchToProps)(ActiveCategory);

  // return (
  //   <div>
  //     <li>Category 1</li>
  //     <li>Category 2</li>
  //   </div>
  // );
//  }

// export default Categories;