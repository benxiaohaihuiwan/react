import LogsItem from "./LogsItem"

import './Logs.css'
const Logs = (props)=>{
  const deleteItemHandler = (id)=>{
    console.log('删除数据')
    // props.deleteHandler(id)
  }
  const LogsInfo = ()=>{
    return props.logsData.map(item=>{
      return <LogsItem logsItemData={item} key={item.id} deleteItemHandler={deleteItemHandler(item.id)} />
    })
  }
  return (
    <div className="logs">
        <LogsInfo />
    </div>
  )
}

export default Logs