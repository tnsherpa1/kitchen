import React from 'react'

const DisplayMenu = props =>
  props.items.map((item, i) => (
    item.desc ?
    <tr key={i}>
      <td>{item.name}</td>
      <td>{item.desc}</td>
      <td>{item.price}</td>
    </tr> :
    <tr key={i}>
      <td>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  ))

export default DisplayMenu
