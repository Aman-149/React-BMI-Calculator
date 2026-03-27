import React from 'react'

export const App = () => {
  return (
  <div className="main">
    <div className='inner'>
        <div className="main1">
        <h2 className='uppername'>BMI Calculator</h2>
    </div>
      <form className="form">
        <div className="form-group">
          <label htmlFor="height">Height (cm):</label>
          <input type="number" id="height" name="height" placeholder='170cm' />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input type="number" id="weight" name="weight" placeholder='60Kg' />
        </div> 
        <div className="buttons">
        <button className="calculate" type="submit">Calculate</button>
        <button className="reset" type="reset">Clear</button>
        </div>
      </form>
    </div>

    <div>
      
    </div>      
  </div>
  )
}
export default App