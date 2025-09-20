import React from 'react'

function RatingMatrix({ options, factors, ratings, setRatings }) {
  const handleChange = (option, factor, value) => {
    setRatings({
      ...ratings,
      [`${option}-${factor}`]: parseFloat(value)
    })
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Rate Options by Factors</h2>
      <table className="table-auto border-collapse border border-gray-300 w-full text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Option / Factor</th>
            {factors.map((f, idx) => (
              <th key={idx} className="border border-gray-300 px-4 py-2">{f.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {options.map((opt, i) => (
            <tr key={i}>
              <td className="border border-gray-300 px-4 py-2 font-medium">{opt}</td>
              {factors.map((f, j) => (
                <td key={j} className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    min="0"
                    max="5"
                    value={ratings[`${opt}-${f.name}`] || ''}
                    onChange={e => handleChange(opt, f.name, e.target.value)}
                    className="border p-1 rounded w-16 text-center"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RatingMatrix