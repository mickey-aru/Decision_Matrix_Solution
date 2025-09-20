import React, { useState } from 'react'
import DecisionMatrix from './components/DecisionMatrix'

function App() {
  const [start, setStart] = useState(false)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Decision Matrix Tool</h1>
      {!start ? (
        <div className="flex justify-center">
          <button 
            onClick={() => setStart(true)} 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Take New Decision
          </button>
        </div>
      ) : (
        <DecisionMatrix />
      )}
    </div>
  )
}

export default App