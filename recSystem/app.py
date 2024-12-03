from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Load the dataset and preprocess
df = pd.read_csv('perfumeData.csv', encoding='ISO-8859-1')
df.drop_duplicates(inplace=True)
df.dropna(inplace=True)

# Extract features
features = df['Name'] + ' ' + df['Brand'] + ' ' + df['Notes']
vectorizer = TfidfVectorizer()
feature_vectors = vectorizer.fit_transform(features.values.astype('U'))
similarity_matrix = cosine_similarity(feature_vectors)

# Save similarity_matrix for future use (optional)
pickle.dump(similarity_matrix, open("similarity_matrix.pkl", "wb"))

# Endpoint to fetch similar perfumes
@app.route('/recommend', methods=['GET'])
def recommend():
    try:
        # Get the notes input from the query parameter
        input_notes = request.args.get('notes', '')

        if not input_notes:
            return jsonify({"error": "Missing 'notes' parameter"}), 400

        # Transform the input notes into a feature vector
        input_vector = vectorizer.transform([input_notes])

        # Compute similarity scores between the input and all perfumes
        similarity_scores = cosine_similarity(input_vector, feature_vectors)

        # Get indices of the top-n most similar perfumes
        n = int(request.args.get('n', 5))  # Default to 5 recommendations
        similar_indices = similarity_scores[0].argsort()[-n:][::-1]

        # Fetch the details of the similar perfumes
        recommendations = df.iloc[similar_indices].to_dict(orient='records')

        return jsonify(recommendations)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)