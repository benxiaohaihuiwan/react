import LogsItem from "./LogsItem"
import MyDate from "./MyDate"
import './Logs.css'
const Logs = ()=>{
  return (
    <div className="logs">
      <div className="item">
        <MyDate />
        <LogsItem />
      </div>
    </div>
  )
}

export default Logs