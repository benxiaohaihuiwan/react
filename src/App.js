import { useState } from "react"
import Logs from "./components/Logs/Logs"

import UseRefTest from "./components/useRefTest"

import FormTest from "./components/FormTest/FormTest"


const App = ()=>{
  const [logsData,setLogsData] = useState([
    {
      id:'1000',
      month:'四 月',
      day:10,
      desc:'降龙十八掌',
      time:'40分钟'
    },
    {
      id:'1001',
      month:'八 月',
      day:20,
      desc:'打狗棒',
      time:'60分钟'
    },
    {
      id:'1002',
      month:'十一 月',
      day:16,
      desc:'易筋经',
      time:'100分钟'
    }
  ])
  const onSaveForm = (data)=>{
    setLogsData([...logsData,data])
  }
  const deleteHandler = (id)=>{
    setLogsData(logsData.filter(item=>item.id !==id))
  }
  return (
    <div>
      <FormTest onSaveForm={onSaveForm} />
      <Logs logsData={logsData} deleteHandler={deleteHandler} />
      <UseRefTest />
   </div>
  )
}

export default App