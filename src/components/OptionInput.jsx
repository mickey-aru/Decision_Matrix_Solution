import React, { useState } from 'react'

function OptionInput({ options, setOptions }) {
  const [input, setInput] = useState('')

  const addOption = () => {
    if (input.trim()) {
      setOptions([...options, input.trim()])
      setInput('')
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Enter Options</h2>
      <div className="flex gap-2">
        <input 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          className="border p-2 rounded w-full" 
          placeholder="Type an option"
        />
        <button onClick={addOption} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add</button>
      </div>
      <ul className="mt-2 list-disc list-inside">
        {options.map((opt, idx) => (
          <li key={idx}>{opt}</li>
        ))}
      </ul>
    </div>
  )
}

export default OptionInput