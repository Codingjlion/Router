import React from 'react';

const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
return (
<div className="filter">
    <input
    type="text"
    placeholder="Search by title"
    value={title}
    onChange={(event) => onTitleChange(event.target.value)}
    />
    <select value={rate} onChange={(event) => onRateChange(event.target.value)}>
    <option value="">Filter by rating</option>
    <option value="1">9</option>
    <option value="2">2 </option>
    <option value="3">3 </option>
    <option value="4">4 </option>
    <option value="5">5</option>
    </select>
</div>
);
};

export default Filter;