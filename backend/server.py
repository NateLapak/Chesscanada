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

   def __init__(self, username, email, password):
      self.username = username
      self.email = email
      self.password = password


# Route to go to the play page
@app.route('/play')
def play():
  return "play page"

# Standard game of chess page
@app.route("/play/standard")
def standard_game():
   return "Play standard game of chess"

@app.route("/play/blindfold")
def blindfold_game():
   return "Play blindfolded chess game"

# Login page
@app.route("/login", methods=["GET", "POST"])
def login():
   return "Login"

# Register page
@app.route("/register", methods=["POST"])
def register():
   return "Register"

# Puzzles page
@app.route("/puzzles")
def puzzles():
   return "Puzzles"



# Running app
if __name__ == '__main__':
    app.run(host='0.0.0.0')