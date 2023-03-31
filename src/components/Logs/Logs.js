import LogsItem from "./LogsItem"

import './Logs.css'
const Logs = (props)=>{
  const LogsInfo = ()=>{
    return props.logsData[0].map(item=>{
      return <LogsItem logsItemData={item} key={item.id} />
    })
  }
  return (
    <div className="logs">
        <LogsInfo />
    </div>
  )
}

export default Logs