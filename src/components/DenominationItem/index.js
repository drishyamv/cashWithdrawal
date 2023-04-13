import './index.css'

const DenominationItem = props => {
  const {value, withdrawCash} = props
  const onCashWithdrawal = () => {
    withdrawCash(value)
  }

  return (
    <li className="denomination-value">
      <button type="button" className="withdrawBtn" onClick={onCashWithdrawal}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
