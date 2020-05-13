import React from 'react'
import './Badge.scss'

const Badge = ({ color, onClick, className }) => {
    return (
        <div className={`badge badge--${color} ${className ? className : ''}`} onClick={onClick}></div>
    )
}

export default Badge