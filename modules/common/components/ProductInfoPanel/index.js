import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TypoGraphy from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(2)
    },
    heading: {
        fontSize: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.fontWeightRegular
        }
    }
}))

const ProductInfoPanel = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-control="panelia-content"
                    id="panelia-header"
                >
                    <TypoGraphy className={classes.heading}>
                        Product Info 1
                    </TypoGraphy>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <TypoGraphy>
                        fsfsfsffsfsfsfsf
                    </TypoGraphy>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export default ProductInfoPanel;