import React from 'react'
import ReactDOM from 'react-dom'
import Tree from 'react-animated-tree'
// import './styles.css'

const treeStyles = {
  position: 'absolute',
  top: 40,
  left: 40,
  color: 'white',
  fill: 'white',
  width: '100%'
}

const typeStyles = {
  fontSize: '2em',
  verticalAlign: 'middle'
}

const Widget = () => (
  <Tree content="main" type="ITEM" open style={treeStyles}>
    <Tree content="subtree" >
      <Tree content="hello" />
      <Tree content="sub-subtree">
        <Tree content="child 1" style={{ color: '#63b1de' }} />
        <Tree content="child 2" style={{ color: '#63b1de' }} />
        <Tree content="child 3" style={{ color: '#63b1de' }} />
      </Tree>
      <Tree content="hello" />
    </Tree>
    <Tree content="hello" />
    <Tree content="hello" />
  </Tree>
)


export default Widget