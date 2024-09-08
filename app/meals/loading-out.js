import React from 'react'
import classes from './loading.module.css'
function MealsLoadingPage() {
    return (
        <div className={classes.loading}>Fetching meals..</div>
    )
}

export default MealsLoadingPage