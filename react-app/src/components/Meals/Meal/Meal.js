import classes from './Meal.module.css'

const Meal = ()=>{
  return (
    <div className={classes.Meal}>
      <div className={classes.imgBox}>
        <img src="/img/1.png" />
      </div>
      <div>
        <h2 className={classes.title}>汉堡包</h2>
        <p className={classes.desc}>我是一个特别好吃的汉堡包，吃一个停不下的拉的打卡发</p>
        <div className={classes.priceWrap}>
          <span className={classes.price}>12</span>
          <div className={classes.wrap}>+</div>
        </div>
      </div>
    </div>
  )
}

export default Meal