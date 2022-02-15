import React from 'react'
import {Card, CardContent, CardFooter, CardImage, CardTitle} from '../components'

const HomePage = () => {

    return (
        <>
            <Card>
                <CardTitle>
                    Title Test
                </CardTitle>
                <CardImage/>
                <CardContent>
                    Content Test
                </CardContent>
                <CardFooter>
                    Footer Test
                </CardFooter>
            </Card>
        </>
    )
}

export default HomePage;