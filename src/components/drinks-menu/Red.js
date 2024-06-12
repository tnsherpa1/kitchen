import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu';

const items = [
  {
    name: "2021 Hahn GSM, Central Coast",
    price: "$9.00 ($34.00 Btl)"
  },
  {
    name: "2021 Frank Family Vineyards, Pinot Noir, Carneros",
    price: "$66.00 Btl"
  },
  {
    name: "2021 Napa Cellars, Pinot Noir, Napa Valley",
    price: "$11.00 ($42.00 Btl)"
  },
  {
    name: "2021 Decoy Pinot Noir, Sonoma County",
    price: "$44.00 Btl"
  },
  {
    name: "2018 Bell Syrah, Yountville, Napa Valley",
    price: "$10.50 ($39.00 Btl)"
  },
  {
    name: "2018 Stag's Leap Merlot, Napa Valley",
    price: "$10.00 ($43.00 Btl)"
  },
  {
    name: "2017 Whitehall Lane, Merlot, Napa Valley",
    price: "$55.00 Btl"
  },///
  {
    name: "2018 Pozzan Bacban Zinfandel, Napa Valley",
    price: "$12.00 ($42.00 Btl)"
  },
  {
    name: "2019 Bello Vineyards Cabernet Sauvignon, California",
    price: "$10.50 ($40.00 Btl)"
  },
  {
    name: "2019 Textbook Cabernet, Napa Valley",
    price: "$10.50 ($50.00 Btl)"
  },
  {
    name:'2019 Sterling Vineyard, Heritage Collection Merlot, Napa Valley',
    price: "$11.50 ($45.00 Btl)"
  },
  {
    name:"2022 Green & Red Vineyards Zinfandel, Napa Valley",
    price: "$11.00 ($42.00 Btl)"
  },
  {
    name:'2019 Hall Cabernet Sauvignon, Napa Valley',
    price: "$96.00 Btl"
  }
]

const Red = props => (
  <Collapsible tabIndex={0} trigger="Red Wines">
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
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

Red.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Red
