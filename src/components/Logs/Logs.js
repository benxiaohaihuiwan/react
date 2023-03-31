import LogsItem from "./LogsItem"

import './Logs.css'

import Card from '../Card/Card'

import FilterSelect from '../FilterSelect/FilterSelect'
import { useState } from 'react'
const Logs = (props)=>{
  // const LogsInfo = ()=>{
  //   return props.logsData.map(item=>{
  //     return <LogsItem itemData={item} key={item.id} deleteHandler={()=>props.deleteHandler(item.id)} />
  //   })
  // }
  const middlewareDelete = (id)=>{
    props.deleteHandler(id)
  }

  const [month,setMonth] = useState('3')

  const FilterMonth = props.logsData.filter(item=>item.month === month)

  const LogsInfo = FilterMonth.map(item=><LogsItem itemData={item} key={item.id} deleteHandler={()=>middlewareDelete(item.id)} />)

  const emptyHandlerInfo = LogsInfo.length ? LogsInfo : <p>已经没有数据可加载了</p>
    
  const getChangeMonth = (curMonth)=>{
    setMonth(curMonth)
  }

  return (
    <Card className="logs">
      <FilterSelect value={month} changeMonth={getChangeMonth}></FilterSelect>
       {
         emptyHandlerInfo
       }
    </Card>
  )
}

export default Logs