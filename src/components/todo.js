import React from 'react';
import { Button } from "@mui/material";
export default function Todo({todo}) {
    return (
        <Button>{todo.name}</Button>
    )
}