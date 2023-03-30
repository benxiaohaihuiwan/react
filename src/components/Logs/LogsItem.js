import './LogsItem.css'
const LogsItem = (props)=>{
  return (
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}</div>
      </div>
  )
}

export default LogsItem