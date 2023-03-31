import './LogsItem.css'
import MyDate from "./MyDate"

import Card from '../Card/Card'

import BackDrop from '../BackDrop/BackDrop'

import ConfirmModal from '../ConfirmModal/ConfirmModal'
import { useState } from 'react'

const LogsItem = (props)=>{
  const deleteHandler = ()=>{
    setShowModal(true)
  }
  const [showModal,setShowModal] = useState(false)

  const onOk = ()=>{
    props.deleteHandler()
  }
  const onCancel = ()=>{
    setShowModal(false)
  }
  return (
    <Card className="item">
      {
         showModal && <BackDrop>
            <ConfirmModal onOk={onOk} onCancel={onCancel} />
          </BackDrop>
      }
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