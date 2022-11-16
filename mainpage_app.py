from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
import certifi

ca = certifi.where()
client = MongoClient('mongodb+srv://test:amusement@cluster0.ixp01os.mongodb.net/Cluster0?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.amusementPark

@app.route('/')
def home():
    return render_template("mainpage_index.html")
# jwt토큰 알아보기


@app.route("/bucket", methods=["GET"])
def bucket_get():
    bucket_list = list(db.bucket.find({}, {'_id': False}))
    return jsonify({'buckets': bucket_list})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)




