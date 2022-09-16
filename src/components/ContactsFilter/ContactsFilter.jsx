import React from 'react'
import { nanoid } from 'nanoid'
import { Box, Input, Label } from './ContactsFilter.styled'

export default function ContactsFilter({ inputChange }) {
    const filterInpuId = nanoid();
    return (
        <Box>
            <Label htmlFor={filterInpuId}> Write a name for quick search</Label>
            <Input type="text" name='filter' id={filterInpuId} placeholder='Enter some name ...' onChange={inputChange} />
        </Box >
    )
}
