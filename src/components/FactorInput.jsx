import React, { useState } from 'react'

function FactorInput({ factors, setFactors }) {
  const [name, setName] = useState('')
  const [weight, setWeight] = useState(1)

  const addFactor = () => {
    if (name.trim()) {
      setFactors([...factors, { name: name.trim(), weight: parseFloat(weight) }])
      setName('')
      setWeight(1)
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Enter Factors</h2>
      <div className="flex gap-2">
        <input 
          placeholder="Factor name" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          className="border p-2 rounded w-full"
        />
        <input 
          type="number" 
          value={weight} 
          onChange={e => setWeight(e.target.value)} 
          className="border p-2 rounded w-24"
        />
        <button onClick={addFactor} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add</button>
      </div>
      <ul className="mt-2 list-disc list-inside">
        {factors.map((f, idx) => (
          <li key={idx}>{f.name} (Weight: {f.weight})</li>
        ))}
      </ul>
    </div>
  )
}

export default FactorInput