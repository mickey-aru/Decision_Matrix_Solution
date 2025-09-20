# Decision Matrix Tool

A React-based web application that helps users make informed decisions by evaluating multiple options against weighted criteria.

## Features

- **Option Management**: Add and manage multiple decision options
- **Factor Weighting**: Define decision criteria with customizable weights
- **Rating Matrix**: Rate each option against each factor (0-5 scale)
- **Automated Calculation**: Automatically calculates weighted scores for each option
- **Best Option Recommendation**: Displays the highest-scoring option as the recommended choice
- **Responsive Design**: Built with Tailwind CSS for modern, mobile-friendly interface

## Technology Stack

- **Frontend**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Styling**: Tailwind CSS 3.4.0
- **Package Manager**: npm

## Project Structure

```
decision-matrix-solution/
├── src/
│   ├── components/
│   │   ├── DecisionMatrix.jsx    # Main component orchestrating the decision process
│   │   ├── OptionInput.jsx        # Component for adding decision options
│   │   ├── FactorInput.jsx       # Component for adding weighted factors
│   │   ├── RatingMatrix.jsx      # Interactive matrix for rating options
│   │   └── Result.jsx            # Component displaying calculation results
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── tailwind.config.js           # Tailwind CSS configuration
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd decision-matrix-solution
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Start a New Decision**: Click "Take New Decision" to begin
2. **Add Options**: Enter the options you're considering (e.g., "Option A", "Option B", "Option C")
3. **Define Factors**: Add decision criteria with weights (e.g., "Cost" with weight 3, "Quality" with weight 5)
4. **Rate Options**: Use the rating matrix to score each option against each factor (0-5 scale)
5. **Calculate Results**: Click "Calculate" to see weighted scores and the recommended option

## Example Use Cases

- **Product Selection**: Choosing between different software solutions
- **Job Offers**: Evaluating multiple job opportunities
- **Investment Decisions**: Comparing different investment options
- **Vendor Selection**: Choosing suppliers or service providers
- **Location Decisions**: Selecting office locations or travel destinations

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
