import flask
from flask import request, render_template, make_response, session
 

app = flask.Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0")