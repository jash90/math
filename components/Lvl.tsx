import React from 'react'
import { Form, Text } from './StyledComponents';

type Props = {
    level: number
}

const Lvl = ({ level = 1 }: Props) => (
    <Form noPadding>
        <Text>{"Poziom:"}</Text>
        {[...Array(level).keys()].map((lvl: any) => {
            return (<Text key={String(lvl)}>{"♥"}</Text>);
        })}
    </Form>
)

export default Lvl
