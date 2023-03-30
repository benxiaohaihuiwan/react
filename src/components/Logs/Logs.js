import LogsItem from "./LogsItem"
import MyDate from "./MyDate"
import './Logs.css'
const Logs = ()=>{
  return (
    <div className="logs">
      <div className="item">
        <MyDate month='五月' day="21"/>
        <LogsItem desc="最好的语言 react" time="70分钟" />
      </div>
    </div>
  )
}

export default Logs