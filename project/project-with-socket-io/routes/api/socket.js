import socketHandler from "@main/socket-io-project/apis/socket.io/index"

export default function handler (req, res) {
    socketHandler(req, res);
}