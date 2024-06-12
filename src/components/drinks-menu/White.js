import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu';

const items = [
  {
    name: "2021 Dancing Crow Vineyards Rose, Lake County (House White)",
    price: "$9.00, ($34.00 Btl)"
  },
  {
    name: "2022 Calafia “The Princess” Rose, Russian River",
    price: "$10.00 ($38.00 Btl)"
  },
  {
    name: "2020 Thomas Schmitt Estate Riesling, Germany",
    price: "$10.50 ($41.00 Btl)"
  },
  {
    name: "2022 Trefethen Dry Riesling, Napa Valley",
    price: "$11.00 ($42.00 Btl)"
  },
  {
    name: "2021 Chateau Montelena Riesling, Potter Valley",
    price: "$46.00 Btl"
  },
  {
    name: "2021 Abiouness, Amrita, White Wine, Napa Valley",
    price: "$10.00 ($38.00 Btl)"
  },
  {
    name: "2020 Flora Spring Pinot Grigio, Napa Valley",
    price: "$9.50 ($36.00 Btl)"
  },
  {
    name: "2021 Navarro Gewurztraminer, Anderson Valley",
    price: "$11.00 ($41.00 Btl)"
  },
  {
    name: "2020 Miner Simpson Vineyard California Viogner",
    price: "$10.00 ($38.00 Btl)"
  },
  {
    name: "2023 Honig Sauvignon Blanc, Napa Valley",
    price: "$10.00 ($39.00 Btl)"
  },
  {
    name: "2021 Twomey Estate Sauvignon Blanc, Napa Valley",
    price: "$46.00 Btl"
  },
  {
    name: "2021 Starmont Chardonney, Carneros",
    price: "$10.00 ($38.00 Btl)"
  },
  {
    name: "2021 Markham Chardonnay, Napa Valley",
    price: "$46.00 Btl"
  },
  {
    name: "2022 Apsara Chardonnay, Petaluma Gap",
    price: "$10.50 ($41 Btl)"
  },
  {
    name: "2022 The Terraces Chenin Blanc, Clarksburg",
    price: "$46.00 Btl"
  },
  {
    name: "Missing Thorn ( Alcohol Removed Wine )",
    price: "$40.00 ($38.00 Btl)"
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
