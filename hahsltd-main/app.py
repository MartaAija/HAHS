from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Email configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER')

mail = Mail(app)

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        
        if not all([name, email, subject, message]):
            return jsonify({'error': 'All fields are required'}), 400
        
        # Create email message
        msg = Message(
            subject=f"HAHS Contact Form: {subject}",
            recipients=['info@hahs.ca']
        )

        # Plain text fallback
        msg.body = f"""
Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
        """

        # Professional styled HTML version
        msg.html = f"""
<div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
  
  <h2 style="color: #8b4513; margin-bottom: 20px;">High Altitude Heli Services – Contact Form</h2>
  
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tr>
      <td style="padding: 8px; font-weight: bold; width: 120px; background: #f9f9f9; border: 1px solid #ddd;">Name</td>
      <td style="padding: 8px; border: 1px solid #ddd;">{name}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold; background: #f9f9f9; border: 1px solid #ddd;">Email</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:{email}" style="color: #8b4513; text-decoration: none;">{email}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold; background: #f9f9f9; border: 1px solid #ddd;">Subject</td>
      <td style="padding: 8px; border: 1px solid #ddd;">{subject}</td>
    </tr>
  </table>

  <div style="margin-top: 20px;">
    <p style="font-weight: bold; margin-bottom: 10px;">Message:</p>
    <div style="padding: 15px; background: #f8f8f8; border-left: 4px solid #8b4513; border-radius: 4px; white-space: pre-line;">
      {message}
    </div>
  </div>

  <p style="margin-top: 30px; font-size: 12px; color: #777; text-align: center;">
    This message was sent from the HAHS website contact form.
  </p>
</div>
"""

        # Send email
        mail.send(msg)
        
        return jsonify({'message': 'Email sent successfully!'}), 200
        
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return jsonify({'error': 'Failed to send email'}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
