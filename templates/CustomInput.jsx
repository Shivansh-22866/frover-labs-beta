import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const CustomInput = ({ options, label, isVisible = true }) => {
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    options.setValue(value);
    validateInput(value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateInput = (value) => {
    let errorMessage = '';

    if (options.pattern && !new RegExp(options.pattern).test(value)) {
      errorMessage = `Invalid input format`;
    } else if (options.includeAll && options.includeAll.length > 0 &&
      !options.includeAll.every(item => value.includes(item))) {
      errorMessage = `Must include all of: ${options.includeAll.join(', ')}`;
    } else if (options.includeOneOf && options.includeOneOf.length > 0 &&
      !options.includeOneOf.some(item => value.includes(item))) {
      errorMessage = `Must include one of: ${options.includeOneOf.join(', ')}`;
    } else if (options.exclude && options.exclude.length > 0 &&
      options.exclude.some(item => value.includes(item))) {
      errorMessage = `Cannot include: ${options.exclude.join(', ')}`;
    }

    if (options.type === 'password' && options.passwordRequirements) {
      const { requireCapitalLetter, requireSymbol, requireNumber } = options.passwordRequirements;

      if (requireCapitalLetter && !/[A-Z]/.test(value)) {
        errorMessage = 'Must include at least one capital letter';
      } else if (requireSymbol && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        errorMessage = 'Must include at least one symbol';
      } else if (requireNumber && !/\d/.test(value)) {
        errorMessage = 'Must include at least one number';
      }
    }

    setError(errorMessage);

    if (options.name) {
      const inputElement = document.getElementById(`${options.name.replace(/\s+/g, '-').toLowerCase()}-input`);
      if (inputElement) {
        inputElement.setCustomValidity(errorMessage);
      }
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-400">
        {label}
      </label>
      <div className="relative">
        <input
          id={options.name ? `${options.name.replace(/\s+/g, '-').toLowerCase()}-input` : ''}
          type={options.type === 'password' && !passwordVisible ? 'password' : 'text'}
          className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-white`}
          placeholder={options.placeholder}
          value={options.value}
          onChange={handleChange}
          onBlur={() => validateInput(options.value)}
          required={options.required}
          onInvalid={(e) => {
            e.preventDefault();
            setError(e.currentTarget.validationMessage);
          }}
          minLength={options.minLength}
          maxLength={options.maxLength}
          pattern={options.pattern}
          name={options.name}
        />
        {options.type === 'password' && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-2 py-1"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default CustomInput;
