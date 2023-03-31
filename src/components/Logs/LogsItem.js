import './LogsItem.css'
import MyDate from "./MyDate"

import Card from '../Card/Card'

const LogsItem = (props)=>{
  const deleteHandler = ()=>{
    props.deleteHandler()
  }
  return (
    <Card className="item">
        <MyDate month={props.itemData.month} day={props.itemData.day} />
        <div className="content">
          <h2 className="desc">{props.itemData.desc}</h2>
          <div className="time">{props.itemData.time}</div>
        </div>
        <button onClick={deleteHandler}>删除</button>
    </Card>
  )
}

export default LogsItem