import React from 'react'
import {Card, CardContent, CardFooter, CardTitle} from '../components'

const HomePage = () => {

    return (
        <div style={{height: '200px'}}>

            <Card>
                <CardTitle>
                    Title Test
                </CardTitle>
                <CardContent>
                    Content Test
                </CardContent>
                <CardFooter>
                    Footer Test
                </CardFooter>
            </Card>

        </div>
    )
}

export default HomePage;