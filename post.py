from flask import Flask, render_template, request, jsonify
app = Flask(__name__)


from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('', tlsCAFile=ca)
db = client.guhaejo

@app.route('/')
def post():
    return render_template('post.html')

@app.route('/post_up')
def post_up():
    return render_template('post_up.html')

@app.route("/post_up", methods=["POST"])
def web_article_post():
    return jsonify({'msg': '등록완료!'})

@app.route("/post", methods=["GET"])
def web_article_get():

    return jsonify({'articles': 'GET 연결 완료!'})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)