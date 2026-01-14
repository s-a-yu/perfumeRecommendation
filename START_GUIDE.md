# Aura - Perfume Recommendation System

## Quick Start Guide

### Starting All Services

To start the entire application (backend, recommendation system, and frontend), simply run:

```bash
./start_all.sh
```

This will start:
- **Backend Server** (Node.js/Express) on port 8080
- **Recommendation System** (Python/Flask) on port 5000
- **Frontend** (React) on port 3000

### Stopping All Services

To stop all running services:

```bash
./stop_all.sh
```

This will cleanly shut down all three services and free up the ports.

---

## Service Details

### Frontend (React)
- **URL**: http://localhost:3000
- **Description**: User interface for fragrance discovery
- **Location**: `my-app/`

### Backend (Node.js/Express)
- **URL**: http://localhost:8080
- **Description**: Authentication and user data management
- **Location**: `backend/`
- **API Endpoints**:
  - `/api/auth/login` - User login
  - `/api/auth/register` - User registration
  - `/api/frag/*` - Fragrance management

### Recommendation System (Python/Flask)
- **URL**: http://localhost:5000
- **Description**: AI-powered fragrance recommendation engine
- **Location**: `recSystem/`
- **API Endpoints**:
  - `/recommend` - Get fragrance recommendations

---

## Manual Start (Individual Services)

If you prefer to start services individually:

### Backend
```bash
cd backend
node index.js
```

### Recommendation System
```bash
cd recSystem
source venv/bin/activate
python app.py
```

### Frontend
```bash
cd my-app
npm start
```

---

## Logs

All service logs are stored in the `logs/` directory:

- `logs/backend.log` - Backend server logs
- `logs/recsystem.log` - Recommendation system logs
- `logs/frontend.log` - Frontend logs

To view logs in real-time:
```bash
tail -f logs/*.log
```

To view a specific service log:
```bash
tail -f logs/backend.log
tail -f logs/recsystem.log
tail -f logs/frontend.log
```

---

## Troubleshooting

### Port Already in Use

If you get a "port already in use" error, stop all services first:
```bash
./stop_all.sh
```

Then start again:
```bash
./start_all.sh
```

### MongoDB Connection Issues

If the backend can't connect to MongoDB, check your `.env` file in the `backend/` directory and ensure the `MONGO_URI` is correct.

### Python Environment Issues

If the recommendation system fails to start, ensure the virtual environment is set up:
```bash
cd recSystem
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### React Build Issues

If the frontend fails to start:
```bash
cd my-app
npm install
npm start
```

---

## Development

- The frontend will automatically reload when you make changes
- Backend and RecSystem require manual restart after code changes
- To restart a specific service, stop all services and start again

---

## Environment Variables

### Backend (.env)
- `MONGO_URI` - MongoDB connection string
- `PORT` - Backend server port (default: 8080)
- `JWT_SECRET` - Secret key for JWT tokens

---

## First Time Setup

1. Install dependencies for all services:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../my-app
   npm install

   # Recommendation System
   cd ../recSystem
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

2. Configure environment variables in `backend/.env`

3. Start all services:
   ```bash
   cd ..
   ./start_all.sh
   ```

4. Open your browser to http://localhost:3000

---

## Support

For issues or questions, check the logs directory for error messages.
