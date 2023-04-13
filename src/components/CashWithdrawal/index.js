import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    totalBalance: 2000,
  }

  withdrawCash = value => {
    this.setState(prevState => ({totalBalance: prevState.totalBalance - value}))
  }

  render() {
    const {totalBalance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="withdrawal-card">
          <div className="nameCard">
            <p className="profile-pic">S</p>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-card">
            <p className="balance">Your Balance</p>
            <p className="amount">{totalBalance}</p>
          </div>
          <p className="rupee-text">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="balance">CHOOSE SUM (IN RUPEES)</p>

          <ul className="deno-cards">
            {denominationsList.map(eachlist => (
              <DenominationItem
                denominationsList={eachlist}
                key={eachlist.id}
                value={eachlist.value}
                withdrawCash={this.withdrawCash}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
