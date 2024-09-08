
import Link from 'next/link'
import { Suspense } from 'react';
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'
export const metadata = {
    title: 'All meals',
    description: 'Browse the meal'
}

export async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}
export default function Mealspage() {


    return (
        <>
            <header className={classes.header}>
                <h1>Deliecious meal created by <span className={classes.highlight}>by you</span></h1>
                <p>Choose your favourate recipie and cook it yourself</p>
                <p className={classes.cta}>
                    <Link href="meals/share">Share your favourate recipie</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<div className={classes.loading}>Fetching meals..</div>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}
