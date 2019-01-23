import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu';

const items = [
  {
    name: "2009 Work Vineyard Sauvignon Blanc, Napa Valley (House White)",
    price: "$8"
  },
  {
    name: "2017 Aerena Rise, SF Bay, CA",
    price: "$9 ($36.00 Btl)"
  },
  {
    name: "2017 Trefethen Dry Riesling, Napa Valley",
    price: "$10 ($38.00 Btl)"
  },
  {
    name: "2017 Figuiere Province Rose, France",
    price: "$9 ($35.00 Btl)"
  },
  {
    name: "2016 Chateau Montelena Riesling, Potter Valley",
    price: "$40.00 Btl"
  },
  {
    name: "2016 Abiouness, Amrita White Wine, Napa Valley",
    price: "$9 ($35.00 Btl)"
  },
  {
    name: "2017 Flora Spring Pinot Grigio, Napa Valley",
    price: "$9 ($34.00 Btl)"
  },
  {
    name: "2017 Tramin, Alto Adige Pinot Grigio, Italy",
    price: "$8 ($32.00 Btl)"
  },
  {
    name: "2017 Navarro Gewurztraminer, Anderson Valley",
    price: "$10 ($40.00 Btl)"
  },
  {
    name: "2017 Miner Simpson Vineyard California Viogner",
    price: "$8 ($32.00 Btl)"
  },
  {
    name: "2017 Honig Sauvignon Blanc, Napa Valley",
    price: "$9 ($34.00 Btl)"
  },
  {
    name: "2017 Twomey Estate Sauvignon Blanc, Napa Valley",
    price: "$40.00 Btl"
  },
  {
    name: "2015 Starmont Chardonney, Carneros",
    price: "$9 ($34.00 Btl)"
  },
  {
    name: "2016 Markham Chardonnay, Napa Valley",
    price: "$10 ($38.00 Btl)"
  }
]

const White = props => (
  <Collapsible tabIndex={0} trigger="White Wines">
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

White.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default White
