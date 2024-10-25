from flask import Flask, render_template\

from random import sample

app = Flask(__name__)

@app.route("/")
def index():
    numOfWords = 30
    words = []

    # Open the list of words in words.txt
    with open("words.txt", 'r') as file:
        words = file.readlines()

    words = sample(words, numOfWords)
    words = [word.strip() for word in words]

    return render_template("index.html", words=words)

if __name__ == '__main__':
    app.run()