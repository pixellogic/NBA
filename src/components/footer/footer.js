import React from 'react'
import {Link} from 'react-router-dom'
import {CURRENT_YEAR} from '../../config'
export default function Footer() {
    return (
        <div className = "foooter">
            <Link to = "/" className ="footer__logo">
                <img alt = "nba logo" src = "/images/nba_logo.png" />
            </Link>
            <div className = "footer__copyright">
                @NBA {CURRENT_YEAR} All rights reserved
            </div>
        </div>
    )
}
