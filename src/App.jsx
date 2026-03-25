import React from 'react'

export const App = () => {
  return (
  <div className="main">
    <div className="main">
      <h2 className='uppername'>BMI Calculator</h2>
    </div>
    <div className='inner'>
      <form className="form">
        <div className="form-group">
          <label htmlFor="height">Height (cm):</label>
          <input type="number" id="height" name="height" />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input type="number" id="weight" name="weight" />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
    </div>

    <div>
      
    </div>      
  </div>
  )
}
export default App