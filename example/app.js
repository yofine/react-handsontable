import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HSTable from '../src/index.js'
import { dataSource } from './data'

const RedLabel = props => {
  return <div style={{fontSize: '20px'}}>{props.text}</div>
}

const Avatar = props => {
  return <img width='25' src={props.link} />
}

const Numbers = props => {
  return <span style={{color: 'green'}}>{props.num}</span>

}

const columns = [{
  title: '账号',
  data: 'name',
  renderer: (instance, td, row, col, prop, value, cellProperties) => {
    return <RedLabel text={value} />
  }
}, {
  title: '头像',
  data: 'avatar',
  renderer: (instance, td, row, col, prop, value, cellProperties) => {
    return <Avatar link={value} />
  }
}, {
  title: '粉丝数',
  data: 'followers',
  renderer: (instance, td, row, col, prop, value, cellProperties) => {
    return <Numbers num={value} />
  }
}]

class App extends Component {

  render() {
    return <HSTable dataSource={dataSource} columns={columns} />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
