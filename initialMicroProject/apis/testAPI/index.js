const INTERNALL_VAR = "dasdsa";
function name() {
    return " goozooo"
}

export function RequestHandler(req, res) {
    res.status(200).json({ name: INTERNALL_VAR , message: name() });
}