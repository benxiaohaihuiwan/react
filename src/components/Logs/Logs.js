import LogsItem from "./LogsItem"

import './Logs.css'

import Card from '../Card/Card'
const Logs = (props)=>{
  // const LogsInfo = ()=>{
  //   return props.logsData.map(item=>{
  //     return <LogsItem itemData={item} key={item.id} deleteHandler={()=>props.deleteHandler(item.id)} />
  //   })
  // }
  const LogsInfo = props.logsData.map(item=><LogsItem itemData={item} key={item.id} deleteHandler={()=>props.deleteHandler(item.id)} />)

  const emptyHandlerInfo = LogsInfo.length ? LogsInfo : <p>已经没有数据可加载了</p>
    
  
  return (
    <Card className="logs">
       {
         emptyHandlerInfo
       }
    </Card>
  )
}

export default Logs