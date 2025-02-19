import React, { useState } from 'react';

function BMI() {
  const [mass, setMass] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    // Validate inputs to ensure they are numbers and positive
    if (isNaN(mass) || isNaN(height) || mass <= 0 || height <= 0) {
      alert("Please enter valid positive numbers for mass and height.");
      return; // Stop the calculation if invalid inputs are found
    }

    const massInKg = parseFloat(mass); // Parse string input to float
    const heightInMeters = parseFloat(height) / 100; // Parse string input to float and convert cm to meters

    const calculatedBmi = massInKg / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi.toFixed(2)); // Round to 2 decimal places

    let bmiCategory = '';
    if (calculatedBmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (calculatedBmi < 25) {
      bmiCategory = 'Normal weight';
    } else if (calculatedBmi < 30) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obese';
    }
    setCategory(bmiCategory);
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>Mass (kg):</label>
        <input
          type="number"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
      </div>
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi !== null && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default BMI;
