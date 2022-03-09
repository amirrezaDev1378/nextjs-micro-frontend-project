

export function RequestHandler(req, res) {
    res.status(200).json({ name: 'john doe' , message: 'is this cool?' });
}