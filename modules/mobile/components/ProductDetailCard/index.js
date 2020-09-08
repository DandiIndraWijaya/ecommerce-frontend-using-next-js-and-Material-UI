import React, { useState } from 'react';
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

import ProductRating from '@common/components/ProductRating';
import PromoCard from '@common/components/PromoCard';

import {currencyFormatter} from '@utils/currency';

const useStyles = makeStyles((theme) => ({
    container: {
        marginButtom: theme.spacing(8)
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    productInfo: {
        marginTop: theme.spacing(2)
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandedOpen: {
        transform: 'rotate(180deg)'
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
    const classes = useStyles();
    const [expanded, setExpanded] = useState(true);

    const handleExpandedClick = () => {
        setExpanded(!expanded);
    }

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

                    <Grid container spacing={1}>
                        <Grid item xs={6} sm={6}>
                            <TypoGraphy variant="button" color="secondary">
                                {currencyFormatter(price)}
                            </TypoGraphy>
                        </Grid>
                        <Grid itme xs={6} sm={6}>
                            <ProductRating rating={rating} sold={sold} alignRight />
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} className={classes.productInfo}>
                        <Grid container direction="column" justify="center" item xs={3} sm={3}>
                            <TypoGraphy align="center" variant="overline">
                                Berat
                            </TypoGraphy>
                            <TypoGraphy align="center" variant="button">
                                {weight}
                            </TypoGraphy>
                        </Grid>

                        <Grid container direction="column" justify="center" item xs={3} sm={3}>
                            <TypoGraphy align="center" variant="overline">
                                Kondisi
                            </TypoGraphy>
                            <TypoGraphy align="center" variant="button">
                                {condition}
                            </TypoGraphy>
                        </Grid>

                        <Grid container direction="column" justify="center" item xs={3} sm={3}>
                            <TypoGraphy align="center" variant="overline">
                                Stok
                            </TypoGraphy>
                            <TypoGraphy align="center" variant="button">
                                {quantity}
                            </TypoGraphy>
                        </Grid>

                        <Grid container direction="column" justify="center" item xs={3} sm={3}>
                            <TypoGraphy align="center" variant="overline">
                                Terjual
                            </TypoGraphy>
                            <TypoGraphy align="center" variant="button">
                                {sold}
                            </TypoGraphy>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center" alignItems="center">
                        <IconButton
                            onClick={handleExpandedClick}
                            className={clsx(classes.expand, {
                                [classes.expandedOpen]: expanded
                            })}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </Grid>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <TypoGraphy paragraph variant="subtitle2">
                            Deskripsi
                        </TypoGraphy>
                        <TypoGraphy paragraph variant="body2">
                            {description}
                        </TypoGraphy>
                    </CardContent>
                </Collapse>
            </Card>
            <PromoCard promo={promo} />
            <br></br>
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