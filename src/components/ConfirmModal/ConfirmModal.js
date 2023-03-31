import './ConfirmModal.css'

const ConfirmModal = (props)=>{
  const onOk = ()=>{
    props.onOk()
  }
  const onCancel = ()=>{
    props.onCancel()
  }
  return (
    <div className='confirmModal'>
      <div className='confirm-content'>确定要删除？</div>
      <div className='confirm-btn'>
        <button style={{marginRight:'10px'}} onClick={onOk}>确定</button>
        <button onClick={onCancel}>取消</button>
      </div>
    </div>
  )
}

export default ConfirmModal