import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu';

const items = [
  {
    name: "2018 Hahn GSM, Central Coast (House Red)",
    price: "$9"
  },
  {
    name: "2018 Frank Family Vineyards, Pinot Noir",
    price: "$29.00 1/2 Btl"
  },
  {
    name: "2017 Napa Cellars, Pinot Noir, Napa Valley",
    price: "$10.50 ($39.00 Btl)"
  },
  {
    name: "2018 Decoy Pinot Noir, Sonoma County",
    price: "$41.00 Btl"
  },
  {
    name: "2017 Bell Syrah, Yountville, Napa Valley",
    price: "$10.50 ($39.00 Btl)"
  },
  {
    name: "2014 Whitehall Lane, Merlot, Napa Valley",
    price: "$41.00 Btl"
  },
  {
    name: "2011 Jericho Canyon Merlot, Napa Valley",
    price: "$65.00 Btl"
  },
  {
    name: "2014 Scott Harvey Zinfandel, Amador County",
    price: "$9 ($34.00 Btl)"
  },
  {
    name: "2016 Bello Vineyards Cabernet Sauvignon, California",
    price: "$10.50 ($39.00 Btl)"
  },
  {
    name: "2015 Charles Krug Cabernet Sauvignon, Napa Valley",
    price: "$40.00 Btl"
  },
  {
    name: "2013 Ehlers Estate Cabernet Sauvignon, Napa Valley",
    price: "$85.00 Btl"
  },
  {
    name: "2012 Forward Kidd Red Wine, Napa Valley",
    price: "$60.00 Btl"
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
