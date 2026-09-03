export const verifyApiKey = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  if (!apiKey) {
    return res.status(401).json({ error: "Access Denied. API key missing!" });
  }

  if (apiKey !== process.env.MY_SECRET_API_KEY) {
    return res.status(403).json({ error: "Forbidden. Invalid API Key!" });
  }

  next();
};