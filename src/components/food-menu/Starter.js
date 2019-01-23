import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu'

const items = [
  {
    name: 'Vegetables Pakoras ',
    desc:
      'Golden fried mixed vegetables fritters served with our homemade mint sauce (v)',
    price: '$7.50',
  },
  {
    name: 'Vegetable Samosas ',
    desc:
      'Crisp savory pastries stuffed with potatoes, green peas & spices served with mint sauce (v)',
    price: '$8.00',
  },
  {
    name: 'Himalayan Salad ',
    desc:
      'Organic field greens, strawberries, almonds and cucumber with our homemade dressing',
    price: '$9.95',
  },
  {
    name: 'Beet Salad ',
    desc:
      'Roasted beet, baby spinach, carrot, cherry tomatoes with cambozola cheese',
    price: '$10.50',
  },
  {
    name: 'Garlic Prawn Salad ',
    desc:
      'Sauteed garlic prawns, organic field greens, cucumbers, tomatoes and goat cheese',
    price: '$13.95',
  },
]

const Starter = props => (
  <Collapsible tabIndex={0} trigger="Starters and Salads">
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          <DisplayMenu items={items}/>
        </thead>
        <tbody />
      </table>
    </div>
  </Collapsible>
)

Starter.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Starter
