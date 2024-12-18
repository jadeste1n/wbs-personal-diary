import React, { useState } from 'react';
import formattedToday from '../data/DateofToday';
import DefaultImage from '../assets/open-book-with-floral-illustration-minimalist-line-art-design_432571-4214.jpg'

const Form = ({ setEntries }) => {
	
	// Set Initial Form Stat
	const [formData, setFormData] = useState({
		id: '',
		date: `${formattedToday}`, 
		title: "",
		image: "",
		content: '',
    });

	//set initial Error State
	const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { key, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

	// Validate form data
    const validate = () => {
        const newErrors = {};

        if (!formData.title.trim()) {// evaluates true if title is empty/only whitespace
            newErrors.name = 'Title is required.';
        }

        if (!formData.content.trim()) {
            newErrors.email = 'Content is required.';
        } 

        if (!formData.image.trim()) {
            formData.image = `${DefaultImage}`,  
        }

        setErrors(newErrors);

        // Return true if there are no errors
		//This method returns an array of the keys (property names) of the newErrors object. For example:
        return Object.keys(newErrors).length === 0; // if array is empty there are no errors -> returns true
    };

	// Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) { // if validate returns true
            setEntries((prevEntries) => [...prevEntries, formData]);
			// Optionally, log the entries to verify
        	console.log(entries);

            // Clear the form again
            setFormData({
                id: '',
				date: `${formattedToday}`, 
				title: "",
				image: "",
				content: '',
            });
        }
    };

	return (
		<>
			<h3 className="font-bold text-lg">Create new Entry</h3>
			<form onSubmit={handleSubmit}>
				<label for="title">Today's Title</label>
				<br></br>
				<input
					type="text"
					placeholder="Type here"
					className="input input-bordered w-full max-w-xs ${
                        errors.name ? 'border-red-500' : 'border-gray-300'"
					value = {formData.title}
					onChange={handleChange}

				/>
				<label for="content">Make your Entry</label>
				<br></br>
				<textarea
					placeholder="Dear diary..."
					class="textarea textarea-md w-full max-w-xs ${
                        errors.name ? 'border-red-500' : 'border-gray-300'"
					name="content"
					value = {formData.content}
					onChange={handleChange}
				></textarea>
				<label for="image">Pick a custom Image</label>
				<br></br>
				<input
					type="file"
					className="file-input file-input-bordered file-input-sm w-full max-w-xs ${
                        errors.name ? 'border-red-500' : 'border-gray-300'"
					name="image"
					value = {formData.image}
					onChange={handleChange}
				/>
			</form>
		</>
	);
};

export default Form;
