import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TypoGraphy from '@material-ui/core/Typography';

import PromoLabel from '../PromoLabel/index';
import ProductRating from '../ProductRating/index';

import { currencyFormatter } from '@utils/currency';

const useStyles = makeStyles({
    card: {
        maxWidth: 360
    },
    image: {
        height: 140
    },
    price: {
        lineHeight: 'normal'
    },
    relative: {
        position: 'relative'
    },
    promoLabel: {
        position: 'absolute',
        bottom: 6,
        left: 4
    }
})

const ProductCard = ({ img, title, promoLabel, price, rating, sold, productID }) => {
    const classes = useStyles()
    return (
        <Card>
            <div className={classes.card}>
                <div className={classes.relative}>
                    <CardMedia
                        className={classes.image}
                        image={img}
                        title={title}
                    />

                    <div className={classes.promoLabel}>
                        <PromoLabel promoLabel={promoLabel} />
                    </div>
                </div>
                

                <CardContent>
                    <Grid container direction="column">
                        <TypoGraphy gutterBottom variant="subtitle2" component="h2">
                            {title}
                        </TypoGraphy>
                        <TypoGraphy variant="overline" className={classes.price}>
                            {currencyFormatter(price)}
                        </TypoGraphy>
                        <ProductRating rating={rating} sold={sold} />
                    </Grid>
                </CardContent>
            </div>
        </Card>
    )
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    promoLabel: PropTypes.array,
    price: PropTypes.number,
    sold: PropTypes.number,
    productID: PropTypes.number.isRequired
}

export default ProductCard;