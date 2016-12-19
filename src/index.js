import React, { Component, Prototype } from 'react'
import ReactDOMServer from 'react-dom/server'
import Handsontable from 'handsontable/dist/handsontable.full.js'
import _ from 'lodash'

const enhancerRenderer = (func) => {
  return (...args) => {
    args[1].innerHTML = ReactDOMServer.renderToString(func.apply(null, args))
    return args[1]
  }
}

export default class Table extends Component {

  componentDidMount() {
    const { dataSource, columns } = this.props
    let _columns = _.map(columns, col => {
      if(col.renderer) {
        col.renderer = enhancerRenderer(col.renderer)
      }
      col.readOnly = true
      return col
    })
    this.hot = new Handsontable(this.table, {
      data: dataSource,
      columns: _columns,
    })
  }

  render() {
    return <div ref={(c) => {this.table = c}}></div>
  }
}
