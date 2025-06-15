const dotenv = require('dotenv');
dotenv.config();  // This must be at the top

const express = require('express');
const connectDB = require('./config/db');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const teamRoutes = require('./routes/team');
const adminRoutes = require('./routes/admin');
const { swaggerUi, specs } = require('./routes/swagger');
const projectRoutes = require('./routes/projects');
const announcementRoutes = require('./routes/announcements');
const recruitmentRoutes = require('./routes/recruitment');
const aboutRoutes = require('./routes/about');

// Initialize express app
const app = express();

app.get('/', (req, res) => {
  res.send('Backend server is running');
});


// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(helmet());
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/team', teamRoutes);
// other routes...
app.use('/api/projects', projectRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/recruitment-status', recruitmentRoutes);
app.use('/api/about', aboutRoutes);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Connect to Database
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
