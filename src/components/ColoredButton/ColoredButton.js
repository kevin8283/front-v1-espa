import React from 'react'
import Button from "@mui/material/Button"

export default function ColoredButton({ children, backgroundColor, color, onClick }) {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
  }
  return (
    <Button 
      style={style} 
      variant="contained" 
      disableElevation
      onClick={onClick}
    >
        {children}
    </Button>
  )
}
