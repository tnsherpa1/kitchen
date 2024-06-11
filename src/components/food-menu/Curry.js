import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu';

const items = [
  {
    name: 'Mismas Tarkari',
    desc: 'Seasonal mixed vegetables in a light curry sauce.',
    price: '$17.95',
  },
  {
    name: 'Chana Masala ',
    desc: 'Organic Garbanzo beans with herbs in an onion gravy.',
    price: '$17.95',
  },
  {
    name: 'Alu Cauli Kerau',
    desc: 'Potatoes, cauliflowers and green peas in curry sauce.',
    price: '$17.95',
  },
  {
    name: 'Alu Bhanta',
    desc: 'Himalayan style cubes of eggplant and potatoes in curry sauce.',
    price: '$17.95',
  },
  {
    name: 'Saag Paneer',
    desc: 'Minced spinach with cheese cubes in a light creamy sauce',
    price: '$18.95',
  },
  {
    name: 'Matar Paneer',
    desc: 'Green peas and cheese cubes in a curry sauce',
    price: '$18.95',
  },
  {
    name: 'Kukhura Dahi',
    desc: 'Free range chicken cooked in yogurt and spiced curry sauce',
    price: '$19.95',
  },
  {
    name: 'Kukhura Ra Bhanta',
    desc: 'Free range chicken curry with cubes of Japanese eggplant',
    price: '$19.95',
  },
  {
    name: 'Lukshya Ra Phing',
    desc: 'Tender cubes of lamb curry with Phing (glass noodles)',
    price: '$20.95',
  },
  {
    name: 'Lukshya Saag',
    desc: 'Tender cubes of lamb and spinach cooked in a curry sauce',
    price: '$20.95',
  },
  {
    name: 'Machha Ra Bhanta',
    desc: 'Salmon and eggplant cooked in garlic, ginger and curry sauce',
    price: '$20.95',
  },
  {
    name: 'Prawns Vindaloo',
    desc: 'Prawns and potatoes in a Vindaloo curry sauce',
    price: '$20.95',
  },
]

const Curry = props => (
  <Collapsible tabIndex={0} trigger="Curry Dishes">
    <div className="table-wrapper">
    <p>(All the curry dishes served with a choice of steamed Basmati or Brown Rice)
    Please let us know if you like your curries mild, medium or spicy</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          <DisplayMenu items={items} />
        </thead>
        <tbody />
      </table>
    </div>
  </Collapsible>
)

Curry.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Curry
