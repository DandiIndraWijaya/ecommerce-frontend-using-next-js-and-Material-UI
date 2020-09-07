import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import TypoGraphy from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    container: {
        marginButtom: theme.spacing(8)
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
}))

const ProductDetailCard = ({
    img,
    title,
    price,
    rating, 
    sold,
    description,
    quantity,
    condition,
    weight,
    promo
}) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Card>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={title}
                />
                
                <CardContent>
                    <TypoGraphy variant="h5" component="h1" gutterBottom>
                        {title}
                    </TypoGraphy>
                </CardContent>
            </Card>
        </div>
    )
}

ProductDetailCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    sold: PropTypes.number.isRequired,
    description: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    promo: PropTypes.array.isRequired
}

export default ProductDetailCard;