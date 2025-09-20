import React from 'react'

function Result({ result }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Result</h2>
      <ul className="list-disc list-inside">
        {result.scores.map((s, idx) => (
          <li key={idx}>{s.option}: {s.score}</li>
        ))}
      </ul>
      <h3 className="mt-4 font-bold text-green-700 text-lg">Best Option: {result.best.option} (Score: {result.best.score})</h3>
    </div>
  )
}

export default Result