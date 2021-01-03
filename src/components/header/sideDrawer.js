import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {Link} from 'react-router-dom'
export default function SideDrawer(props) {
    return (
        <Drawer
            anchor = "left"
            open = {props.open}
            onClose = {() =>props.onClose(false)}
        >
            <List
                component = "nav"
            >
                <ListItem button>
                    <Link to = "/">
                         Home
                    </Link>                  
                </ListItem>
                <ListItem button>
                    <Link to = "/videos">
                         videos
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to = "/news">
                         news
                    </Link>
                </ListItem>
                

            </List>

        </Drawer>
    )
}

