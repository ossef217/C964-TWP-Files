from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import util

app = Flask(__name__, template_folder='templates')
CORS(app)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/weighter_predictions', methods=['POST'])
def weighter_predictions():
    gender = int(request.form['gender'])
    smoke = int(request.form['smoke'])
    alco = int(request.form['alco'])
    age = int(request.form['age'])
    height = int(request.form['height'])
    weight = int(request.form['weight'])

    response = jsonify({
        'target_weight': util.get_target_weight(gender, smoke, alco, age, height, weight)
    })

    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


if __name__ == "__main__":
    print("Starting Python Flask Gym-Weighter...")
    util.load_data()
    app.run(debug=False, host='0.0.0.0')
    # print(util.get_target_weight(2, 0, 0, 32, 184, 190))
