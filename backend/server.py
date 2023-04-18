from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Configure SQL alchemy database for Flask
db = SQLAlchemy()

# Initializing flask app
app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///chesscanada.sqlite3"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

# Create the users database model
class users(db.Model):
   id = db.Column("id", db.Integer, primary_key=True)
   username = db.Column(db.String, unique=True, nullable=False)
   email = db.Column(db.String)
   password = db.Column(db.String)


# Route to go to the play page
@app.route('/play')
def play():
  return "play page"

@app.route("/login")
def login():
   return {
      "message": "Hello world!"
   }

@app.route("/register")
def register():
   return "Register"

# Running app
if __name__ == '__main__':
    app.run(host='0.0.0.0')