
export class IMVUBot {
  constructor() {
    this.connected = false;
  }

  getStatus() {
    return {
      connected: this.connected,
      message: this.connected
        ? "Connected"
        : "Not connected"
    };
  }
}

export default IMVUBot;
  
