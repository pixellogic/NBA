import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/layout'

export default class Routes extends Component {
    render() {
        return (
          <Layout>
              <Switch>
                    children
              </Switch>
          </Layout>
        )
    }
}
