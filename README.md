## HNG Stage 0 - Backend Track

A RESTful API endpoint that returns profile information along with dynamic cat facts fetched from an external API. Built with Node.js and Express.js for the HNG Backend Track Stage 0 assessment.

## Live API

**Endpoint:** `aware-endurance-production-7e61.up.railway.app/me`

## Technologies Used

- Node.js
- Express.js
- dotenv
- nodemon

### Prerequisites

- Node.js (v18 or higher)
- npm

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Segundavid-Dev/HNG-BE-stage-0
   cd HNG-BE-stage-0
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment file (optional)**

   Create a `.env` file in the root directory:

   ```env
   PORT=8000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Or run in production mode**
   ```bash
   npm start
   ```

## Dependencies

```
  dotenv
  express
  express-rate-limit
  nodemon
```
