import './LogsItem.css'
import MyDate from "./MyDate"
const LogsItem = (props)=>{
  const deleteHandler = (props)=>{
    console.log('props:',props)
    props.deleteItemHandler()
  }
  return (
    <div className="item">
        <MyDate month={props.logsItemData.month} day={props.logsItemData.day} />
        <div className="content">
          <h2 className="desc">{props.logsItemData.desc}</h2>
          <div className="time">{props.logsItemData.time}</div>
        </div>
        <button onClick={deleteHandler}>删除</button>
    </div>
  )
}

export default LogsItem