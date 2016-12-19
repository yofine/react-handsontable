import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HSTable from '../src/index.js'
import { dataSource } from './data'

const RedLabel = props => {
  return <div style={{fontSize: '20px'}}>{props.text}</div>
}

const AvatarComponent = props => {
  return <img width='25' src={props.value} />
}

const LableComponent = props => {
  return <span style={{color: `${props.color}`}}>{props.value}</span>

}

const columns = [{
  title: '账号',
  data: 'name',
  renderer: (instance, td, row, col, prop, value, cellProperties) => {
    return <LableComponent value={value} color={'grey'} />
  }
}, {
  title: '头像',
  data: 'avatar',
  renderer: (instance, td, row, col, prop, value, cellProperties) => {
    return <AvatarComponent value={value} />
  }
}, {
  title: '粉丝数',
  data: 'followers',
  renderer: (instance, td, row, col, prop, value, cellProperties) => {
    return <LableComponent value={value} color={'green'} />
  }
}]

class App extends Component {

  render() {
    return <HSTable dataSource={dataSource} columns={columns} />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
