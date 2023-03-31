import { useState } from "react"

import { uuid } from "./utils"

const FormTest = (props)=>{

  const [formInfo, setFormInfo] = useState({
    inputDate:'',
    inputDesc:'',
    inputTime:''
  })

  const getInputDate = (e)=>{
    setFormInfo({...formInfo,inputDate:e.target.value})
  }
  const getInputDesc = (e)=>{
    setFormInfo({...formInfo,inputDesc:e.target.value})
  }
  const getInputTime = (e)=>{
    setFormInfo({...formInfo,inputTime:e.target.value})
  }

  const addFormHandler = ()=>{
    const data = {
      month:new Date(formInfo.inputDate).getMonth() + 1 + ' 月',
      day:new Date(formInfo.inputDate).getDay(),
      desc:formInfo.inputDesc,
      time:formInfo.inputTime,
      id:uuid()
    }
    props.onSaveForm(data)

    // 添加完数据，清空表单
    setFormInfo({
      inputDate:'',
      inputDesc:'',
      inputTime:''
    })
  }
  return(
    <div>
      <div>
        <span>日期</span>
        <input type='date' onInput={getInputDate} value={formInfo.inputDate}></input>
      </div>
      <div>
        <span>描述</span>
        <input onInput={getInputDesc} value={formInfo.inputDesc}></input>
      </div>
      <div>
        <span>时间</span>
        <input onInput={getInputTime} value={formInfo.inputTime}></input>
      </div>
      <button onClick={addFormHandler}>添加</button>
    </div>
  )
}

export default FormTest