import React, { useState } from 'react'
import OptionInput from './OptionInput'
import FactorInput from './FactorInput'
import RatingMatrix from './RatingMatrix'
import Result from './Result'

function DecisionMatrix() {
  const [options, setOptions] = useState([])
  const [factors, setFactors] = useState([])
  const [ratings, setRatings] = useState({})
  const [result, setResult] = useState(null)

  const calculate = () => {
    const scores = options.map(option => {
      let total = 0
      factors.forEach(factor => {
        const rating = ratings[`${option}-${factor.name}`] || 0
        total += factor.weight * rating
      })
      return { option, score: total }
    })
    const best = scores.reduce((a, b) => (b.score > a.score ? b : a), scores[0])
    setResult({ scores, best })
  }

  return (
    <div className="space-y-6">
      <OptionInput options={options} setOptions={setOptions} />
      <FactorInput factors={factors} setFactors={setFactors} />
      {options.length > 0 && factors.length > 0 && (
        <RatingMatrix
          options={options}
          factors={factors}
          ratings={ratings}
          setRatings={setRatings}
        />
      )}
      <div className="flex justify-center">
        <button 
          onClick={calculate} 
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
          Calculate
        </button>
      </div>
      {result && <Result result={result} />}
    </div>
  )
}

export default DecisionMatrix