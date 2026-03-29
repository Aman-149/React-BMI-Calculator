import React,{ useState } from 'react'

export const App = () => {
  const [height,setHeight]=useState('')
  const [weight,setWeight]=useState('')
  const [message, setMessage] = useState('')
  const [bmi,setbmi]=useState(null)

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!height || !weight){
      alert('Please enter both height and weight')
      return
    }
    if (height <=0 || weight <=0){
      alert('Height and weight must be positive numbers')
      return
    }
  const h= height/100
  const value =(weight/(h*h)).toFixed(2)
  setbmi(value)
  
  if (value < 18.5) {
  setMessage("Underweight  You may need to gain some weight.")
} else if (value >= 18.5 && value < 25) {
  setMessage("Normal  You have a healthy weight. Keep it up!")
} else if (value >= 25 && value < 30) {
  setMessage("Overweight  Try to exercise more.")
} else {
  setMessage("Obese  Consider a healthier lifestyle.")
}
}
const handleReset =() => {
  setHeight('')
  setWeight('')
  setbmi(null)
  setMessage('')
}

  return (
  <div className="main">
    <div className='inner'>
        <h2 className='uppername'>BMI Calculator</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="height">Height (cm):</label>
          <input 
          type="number" 
          value={height}
          id='height'
          onChange={(e) => setHeight(e.target.value)}
          name="height" 
          placeholder='170cm' />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input 
          type="number" 
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          id="weight" 
          name="weight" 
          placeholder='60Kg' />
        </div> 
        <div className="buttons">
        <button className="calculate" type="submit">Calculate</button>
        <button className="reset" type="button" onClick={handleReset}>Clear</button>
        </div>
        {bmi && <>
        <h3>Your BMI: {bmi}</h3>
        <p>{message}</p>
        </>}
      </form> 
    </div>
    </div>      
  )
}
export default App