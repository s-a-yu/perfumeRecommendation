import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

// Define the list of available notes for selection
const notesOptions = [
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'musk', label: 'Musk' },
    { value: 'lavender', label: 'Lavender' },
    { value: 'rose', label: 'Rose' },
    { value: 'citrus', label: 'Citrus' },
    { value: 'amber', label: 'Amber' },
    { value: 'sandalwood', label: 'Sandalwood' },
    { value: 'jasmine', label: 'Jasmine' }
];

function RecSystem() {
    const [selectedNotes, setSelectedNotes] = useState([]);
    const [recommendations, setRecommendations] = useState([]);

    // Handle API call when the user submits their selected notes
    const getRecommendations = () => {
        const apiUrl = 'http://127.0.0.1:5000/recommend'; // Flask API endpoint

        // Convert selected notes into a comma-separated string
        const notesString = selectedNotes.map(note => note.value).join(', ');

        axios.get(apiUrl, {
            params: {
                notes: notesString, // Pass selected notes
                n: 3                // Number of recommendations
            }
        })
        .then(response => {
            setRecommendations(response.data); // Update state with API response
        })
        .catch(error => {
            console.error('Error fetching recommendations:', error);
        });
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Perfume Recommendation Quiz</h1>
            <p>Select the notes you like to get personalized perfume recommendations:</p>

            {/* Multi-Select Dropdown */}
            <Select
                options={notesOptions}
                isMulti
                onChange={(selected) => setSelectedNotes(selected)}
                placeholder="Select your favorite notes..."
            />

            {/* Submit Button */}
            <button
                onClick={getRecommendations}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Get Recommendations
            </button>

            {/* Display Recommendations */}
            {recommendations.length > 0 && (
                <div style={{ marginTop: '30px' }}>
                    <h2>Recommendations:</h2>
                    {recommendations.map((rec, index) => (
                        <div key={index} style={{ marginBottom: '15px' }}>
                            <h3>{rec.Name}</h3>
                            <p><strong>Brand:</strong> {rec.Brand}</p>
                            <p><strong>Notes:</strong> {rec.Notes}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default RecSystem;