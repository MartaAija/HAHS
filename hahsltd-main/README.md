# High Altitude Heli Services - Modern Website

A modern, professional website for High Altitude Heli Services built with React frontend and Flask backend.

## 🚁 Features

- **Modern React Frontend** with Framer Motion animations
- **Flask Backend** with email functionality
- **Responsive Design** optimized for all devices
- **Professional Animations** and smooth transitions
- **Contact Form** with email integration
- **Social Media Integration** (Instagram & Facebook)
- **Gallery Section** with modal image viewer
- **Fleet Information** with detailed helicopter specs
- **Team Section** showcasing Rob Taylor's expertise

## 📋 Updated Content

### Company Information
- **Email**: Updated to info@hahs.ca
- **Social Media**: Instagram and Facebook links added
- **Company Description**: Professional description highlighting local ownership and comprehensive services

### Services
- **Commercial Services**: Firefighting, mineral exploration, wildlife surveys, pipeline inspection
- **Adventure & Tourism**: Scenic tours, custom charters, romance flights, remote lodge drop-offs
- **Maintenance & Drones**: AME license, aircraft maintenance, drone services, parts logistics

### Fleet
- **Bell 206 JetRanger II** with detailed performance specifications
- Cruise speed, endurance, load capacity, and seating information

### Team
- **Rob Taylor**: Owner, Pilot, and Maintenance Technician
- Professional presentation with roles and certifications

### Gallery
- Renamed to "Experience the Skies"
- Modern grid layout with hover effects
- Modal image viewer for enhanced experience

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn

### Frontend Setup (React)

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

### Backend Setup (Flask)

1. **Create Virtual Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Environment Configuration**
   - Copy `env.example` to `.env`
   - Update with your email credentials:
     ```
     MAIL_USERNAME=your-email@gmail.com
     MAIL_PASSWORD=your-app-password
     MAIL_DEFAULT_SENDER=your-email@gmail.com
     ```

4. **Start Flask Server**
   ```bash
   python app.py
   ```

### Email Configuration

For Gmail:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in your `.env` file

## 📁 Project Structure

```
hahsltd-main/
├── public/                 # Static assets
│   ├── index.html
│   ├── HAHS_Logo.png
│   ├── heli_*.jpg         # Gallery images
│   └── ...
├── src/                   # React source code
│   ├── components/        # React components
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Fleet.js
│   │   ├── Team.js
│   │   ├── Gallery.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── app.py                 # Flask backend
├── requirements.txt       # Python dependencies
├── package.json          # Node.js dependencies
└── README.md
```

## 🎨 Design Features

- **Color Scheme**: Brown and orange gradients matching the logo
- **Typography**: Inter font for modern, professional appearance
- **Animations**: Smooth scroll animations and hover effects
- **Responsive**: Mobile-first design approach
- **Accessibility**: Proper contrast ratios and keyboard navigation

## 📧 Contact Form

The contact form sends emails to info@hahs.ca with:
- Name, email, subject, and message
- Professional formatting
- Error handling and success messages

## 🚀 Deployment

### Frontend (React)
- Build the project: `npm run build`
- Deploy the `build` folder to your hosting service

### Backend (Flask)
- Deploy to services like Heroku, Railway, or DigitalOcean
- Set environment variables for email configuration
- Ensure CORS is properly configured for production

## 📱 Social Media

- **Instagram**: @highaltitudeheliservices
- **Facebook**: High Altitude Heli Services

## 🔧 Customization

### Adding New Images
1. Place images in the `public` folder
2. Update the `galleryItems` array in `Gallery.js`

### Updating Content
- Edit component files in `src/components/`
- Update contact information in `Contact.js`
- Modify services in `Services.js`

### Styling
- Global styles in `src/index.css`
- Component-specific styles using styled-jsx
- Color variables can be updated throughout components

## 📞 Support

For technical support or questions about the website, contact the development team.

---

**High Altitude Heli Services** - Experience the sky like never before! 🚁 