from flask import Flask, render_template, request

# Initializing flask app
app = Flask(__name__)
  
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