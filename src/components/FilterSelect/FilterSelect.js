
const FilterSelect = (props)=>{
  const options = [
    {
      value:3,
      label:3
    },
    {
      value:8,
      label:8
    },
    {
      value:7,
      label:7
    },
    {
      value:11,
      label:11
    }
  ]
  const handleChangeMonth = (e)=>{
    props.changeMonth(e.target.value)
  }
  return(
    <div>
    月份：<select value={props.month} onChange={handleChangeMonth}>
      { options.map(item=><option value={item.value} key={item.value}>{item.label}</option>) }
    </select>
    </div>
  )
}

export default FilterSelect