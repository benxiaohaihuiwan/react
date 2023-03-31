import './LogsItem.css'
import MyDate from "./MyDate"
const LogsItem = (props)=>{
  return (
    <div className="item">
        <MyDate month={props.logsItemData.month} day={props.logsItemData.day} />
        <div className="content">
          <h2 className="desc">{props.logsItemData.desc}</h2>
          <div className="time">{props.logsItemData.time}</div>
        </div>
    </div>
  )
}

export default LogsItem