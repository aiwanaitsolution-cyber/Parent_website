export default function handler(_req, res) {
  res.status(410).json({
    success: false,
    error: 'Legacy endpoint disabled. Use the Render backend /api/leads endpoint.',
  });
}
