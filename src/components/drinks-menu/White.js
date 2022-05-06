import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu';

const items = [
  {
    name: "2020 Dancing Crow Vineyards Rose, Lake County (House White)",
    price: "$9"
  },
  {
    name: "2020 Calafia “The Princess” Rose, Russian River",
    price: "$9.50 ($36.00 Btl)"
  },
  {
    name: "2020 Trefethen Dry Riesling, Napa Valley",
    price: "$10.50 ($39.00 Btl)"
  },
  {
    name: "2019 Chateau Montelena Riesling, Potter Valley",
    price: "$45.00 Btl"
  },
  {
    name: "2019 Abiouness, Amrita, White Wine, Napa Valley",
    price: "$9.50 ($36.00 Btl)"
  },
  {
    name: "2020 Flora Spring Pinot Grigio, Napa Valley",
    price: "$9.50 ($36.00 Btl)"
  },
  {
    name: "2018 Navarro Gewurztraminer, Anderson Valley",
    price: "$10.50 ($41.00 Btl)"
  },
  {
    name: "2018 Miner Simpson Vineyard California Viogner",
    price: "$9.50 ($36.00 Btl)"
  },
  {
    name: "2020 Honig Sauvignon Blanc, Napa Valley",
    price: "$9.50 ($37.00 Btl)"
  },
  {
    name: "2021 Twomey Estate Sauvignon Blanc, Napa Valley",
    price: "$42.00 Btl"
  },
  {
    name: "2018 Starmont Chardonney, Carneros",
    price: "$9.50 ($36.00 Btl)"
  },
  {
    name: "2018 Markham Chardonnay, Napa Valley",
    price: "$10.50 ($39.00 Btl)"
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
