import React from 'react';
import { connect } from 'react-redux';
import { setCategory, filterProduct } from '../../store/categories';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function Categories(props) {
  const clickCategory = (name) => {
    props.setCategory(name);
    props.filterProduct(name);
  }

  return (
    <>
      <h1>Categories</h1>
      <div id="category-list">
        {props.categories.categoryList.map((category, idx) => (
          <div key={idx}>
            <Card className="category">
              <CardActionArea>
                <CardMedia
                  className="category"
                  title={category.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {category.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button id={idx + 'button'} size="small" color="primary" onClick={() => clickCategory(category.name)}>
                  View Category
                  </Button>
              </CardActions>
            </Card>

          </div>
        ))}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  categories: state.category
})
const mapDispatchToProps = { setCategory, filterProduct };
export default connect(mapStateToProps, mapDispatchToProps)(Categories)


