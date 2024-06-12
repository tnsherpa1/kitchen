import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu'

const items = [
  {
    name: 'Napa Smith Organics IPA (Draft)',
    price: '$6.50',
  },
  {
    name: 'Trumer Pilsner (Draft)',
    price: '$7.00',
  },
  {
    name: 'Lagunitas IPA (Draft)',
    price: '$7.00',
  },
  {
    price: 'Nepal Ice Nepalese Lager (Bottled)',
    price: '$10.00',
  },
  {
    name: '805 Blonde Ale (Bottled)',
    price: '$6.00',
  },
  {
    name: 'Fat Tire Amber Ale (Bottled)',
    price: ' $6.00',
  },
  {
    name: 'Taj Mahal - Imported from India (Bottled)',
    price: '$10.00',
  },
  {
    name: 'Mustang - Nepalese Lager (Bottled)',
    price: '$5.50',
  },
  {
    name: 'Lagunitas Hop Stoopid Ale (Bottled)',
    price: '$6.50',
  },
  {
    name: 'Stella Artois (Bottled)',
    price: '$6.00',
  },
  {
    name: 'Anchor Steam Original (Bottled)',
    price: '$5.50',
  },
  {
    name: 'Napa Smith Pilsner (Bottled)',
    price: '$5.50',
  },
  {
    name: 'Non Alcoholic Beer (Bottled)',
    price: '$6.00',
  },
]

const Beer = props => (
  <Collapsible tabIndex={0} trigger="Beer">
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Beer</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <DisplayMenu items={items} />
        </tbody>
      </table>
    </div>
  </Collapsible>
)

Beer.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Beer
