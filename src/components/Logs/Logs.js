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
  return (
    <Card className="logs">
       {
         LogsInfo
       }
    </Card>
  )
}

export default Logs