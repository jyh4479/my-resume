import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardImage,
    CardTitle,
    Table,
    TableData,
    TableHeader,
    TableRow
} from '../components'

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

            <Table>
                <TableRow>
                    <TableHeader>1</TableHeader>
                    <TableHeader>2</TableHeader>
                    <TableHeader>3</TableHeader>
                </TableRow>
                <TableRow>
                    <TableData>a</TableData>
                    <TableData>b</TableData>
                    <TableData>c</TableData>
                </TableRow>
            </Table>

        </>
    )
}

export default HomePage;