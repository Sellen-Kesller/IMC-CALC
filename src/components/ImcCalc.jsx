import { useState } from 'react'
import Button from './Button'
import './ImcCalc.css'

const ImcCalc = ({ calcImc }) => {

const [height, setHeight] = useState("")
const [weight, setWeight] = useState("")

const clearform = (e) => {
  e.preventDefaul()
  setHeight("")
  setWeight("")
}

const validDigits =(text) => {
    return text.replace(/[^0-9,]/g, "")
}

const handleHeightChange = (e) => {
  const updatedValue = validDigits(e.target.value);
  
  setHeight(updatedValue); 
}

const handleWeightChange = (e) => {
  const updatedValue = validDigits(e.target.value);
  
  setWeight(updatedValue); 
}
  return (
    <div id='calc-container'>
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form inputs">
          <div className="form-control">
            <label htmlFor="height">Altura</label>
            <input type="text" 
            name="height" 
            id='height' 
            placeholder='exemplo 1.75' 
            onChange ={(e)=> handleHeightChange(e)}
            value = {height}
            />
          </div>
        </div>

        <div className="form-control">
          <label htmlFor='weigth'>Peso</label>
          <input type="text" 
          name="weight" 
          id='weight' 
          placeholder='exemplo 70.5' 
          onChange={(e)=> handleWeightChange (e)}
          value = {weight}
          />
          <div className="action-control">
            < Button 
            id="calc-btn" 
            text = "Calcular" 
            action={(e) => calcImc(e, height, weight)}
            />
            < Button id="clear-btn" text = "Limpar" action = {(e) => clearform(e)}/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ImcCalc