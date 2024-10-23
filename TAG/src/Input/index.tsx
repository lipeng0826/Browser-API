import React, { useState } from 'react';

/**
 * 
 * react为什么没有让光标的位置发生变化？
 * 
 */

function ControlledInput() {
  // 使用 useState 来存储输入框的值
  const [inputValue, setInputValue] = useState('');

  // 处理 onChange 事件
  const handleChange = (event) => {
    // 从 event 对象中获取输入框的新值
    const newValue = event.target.value;

    // 更新状态，重新渲染组件
    setInputValue(newValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}   // 受控组件，value 始终等于 inputValue 的状态
        onChange={handleChange}  // 监听 onChange 事件并更新状态
      />
      <p>当前输入值: {inputValue}</p>
    </div>
  );
}

export default ControlledInput;
