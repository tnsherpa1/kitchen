import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu'

const items = [
  {
    name: 'Nepalese Daal Soup',
    desc:
      'Lentil soup tempered with sauteed garlic and fresh spinach (v)',
    price: '$9.00',
  },
  {
    name: 'Vegetables Pakoras ',
    desc:
      'Golden fried mixed vegetables fritters served with our homemade mint sauce (v)',
    price: '$8.50',
  },
  {
    name: 'Vegetable Samosas ',
    desc:
      'Crisp savory pastries stuffed with potatoes, green peas & spices served with mint sauce (v)',
    price: '$8.50',
  },
  {
    name: 'Himalayan Salad ',
    desc:
      'Organic field greens, strawberries, almonds and cucumber with our homemade dressing',
    price: '$12.00',
  },
  {
    name: 'Spinach and Beet Salad ',
    desc:
      'Roasted beet, baby spinach, carrot, cherry tomatoes with cambozola cheese',
    price: '$14.00',
  },
  {
    name: 'Garlic Prawn Salad ',
    desc:
      'Sauteed garlic prawns, organic field greens, cucumbers, tomatoes and goat cheese',
    price: '$17.00',
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
