import React, { useState } from 'react';
import formattedToday from '../data/DateofToday';
import DefaultImage from '../assets/open-book-with-floral-illustration-minimalist-line-art-design_432571-4214.jpg'
import { v4 as uuidv4 } from 'uuid';


const Form = ({ setEntries }) => {
	
	// Set Initial Form State
	const [formData, setFormData] = useState({
		id: `${uuidv4()}`,
		date: `${formattedToday}`, 
		title: "",
		image: "",
		content: '',
    });

	//set initial Error State
	const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target; //get the name attribute
		console.log(value); 
        setFormData((prevData) => ({ //update value on change
            ...prevData,
            [name]: value,
        }));
		const aux = formData; //for validation print to soncole
		console.log(aux)
    };

	
	// Validate form data
    const validate = () => {
        const newErrors = {}; // Create an empty object to store error messages for invalid fields.

        if (!formData.title.trim()) {// evaluates true if title is empty/only whitespace
            newErrors.name = 'Title is required.'; //Create errror for name field
        }

        if (!formData.content.trim()) {
            newErrors.email = 'Content is required.';
        } 

        if (!formData.image.trim()) {
            formData.image = `${DefaultImage}`;  
        }

        setErrors(newErrors); //Update the state with the collected error messages.

		
        // Return true if there are no errors
		//This method returns an array of the keys (property names) of the newErrors object. For example:
        return Object.keys(newErrors).length === 0; // if array is empty there are no errors -> returns true
		
    };
	


	// Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) { // if validate returns true
            setEntries((prevEntries) => {
				const newArray = [...prevEntries, formData];
				console.log(newArray);
				return newArray
			}
				);

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
		<div className="flex flex-col">
			<h3 className="font-bold text-lg">Create new Entry</h3>
			<form onSubmit={handleSubmit} className="flex flex-col justify-start items-start gap-4">
				<label htmlFor="title">Today's Title</label>
				<input
					name="title"
					type="text"
					placeholder="Type here"
					className="input input-bordered w-full  ${
                        errors.name ? 'border-red-500' : 'border-gray-600'"
					value = {formData.title}
					onChange={handleChange}

				/>
				<label htmlFor="content">Make your Entry</label>
				
				<textarea
					name="content"
					placeholder="Dear diary..."
					className="textarea textarea-md w-full border-gray-600	 ${
                        errors.name ? 'border-red-500' : 'border-gray-600'"
					value = {formData.content}
					onChange={handleChange}
				></textarea>
				<label htmlFor="image">Pick a custom Image</label>
				
				<input
					name="image"
					type="file"
					className="file-input file-input-bordered file-input-sm w-full max-w-xs ${
                        errors.name ? 'border-red-500' : 'border-gray-600'"
					value = {formData.image}
					onChange={handleChange}
				/>
				<button type="sumbit" value="create Entry" className="btn btn-active btn-primary">Create</button>
			</form>
		</div>
	);
};

export default Form;
