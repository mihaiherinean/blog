import React from 'react'
import { Link } from 'react-router-dom'

const linkStyle = {
  textDecoration : 'none',
}

function Head() {
  return (
    <Link to="/" style={linkStyle}>
    <h1 style={{fontFamily: 'Poppins', color: '#339AFF'}}>iBlog</h1>
    </Link>
  )
}

export default Head