# React-handsontable

## Installing

Using npm:

```bash
$ npm install rc-handsontable
```

## Example

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HSTable from 'rc-handsontable'

const dataSource = [{
  id: '1',
  name: '丁一晨',
  avatar: 'http://tva4.sinaimg.cn/crop.0.1.640.640.1024/6bec10e2jw8ex6sqwoetjj20hs0humxl.jpg',
  followers: 6078151
}, {
  id: '2',
  name: '团子熊por',
  avatar: 'http://tva4.sinaimg.cn/crop.87.943.321.321.1024/a257630egw1eiv7tzo4zqj20lk33nwoz.jpg',
  followers: 4758206
}]

const AvatarComponent = props => <img width='25' src={props.value} />

const LableComponent = props => <span style={{color: `${props.color}`}}>{props.value}</span>

const columns = [{
  title: '姓名',
  data: 'name',
  renderer: (instance, td, row, col, prop, value, cellProperties) => {
    retrun <LableComponent value={value} color={'grey'} />
  }
}, {
  title: '头像',
  data: 'avatar',
  renderer: (instance, td, row, col, prop, value, cellProperties) => {
    retrun <AvatarComponent value={value}>
  }
}, {
  title: '粉丝数',
  data: 'followers',
  renderer: (instance, td, row, col, prop, value, cellProperties) => {
    retrun <LableComponent value={value} color={'green'} />
  }
}]

class App extends Component {
  render() {
    return <HSTable dataSource={dataSource} columns={columns} />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## License

MIT
