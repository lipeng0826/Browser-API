import { useState } from 'react'
import './App.css'

function App() {
  // 初始选项和已选择的值
  const [selectedOptions, setSelectedOptions] = useState([]);

  // 选项数据
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
  ];

  // 处理选择变化
  const handleChange = (event) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };

  return (
    <div>
      <h2>Select your favorite fruits</h2>
      <select multiple value={selectedOptions} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div style={{ marginTop: '20px' }}>
        <h3>Selected Fruits:</h3>
        <ul>
          {selectedOptions.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
