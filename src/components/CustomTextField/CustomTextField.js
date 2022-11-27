import React from 'react'
import { TextField } from "@mui/material"

export default function CustomTextField(props) {
    return (
        <TextField
            {...props}
            className="custom-text-field"
        />
    )
}
