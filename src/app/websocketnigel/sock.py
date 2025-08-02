import asyncio
from fastapi import FastAPI, WebSocket, WebSocketDisconnect

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    print("Client connected")
    await websocket.accept()

    try:
        while True:
            data = await websocket.receive_text()
            print(f"Received data: {data}")

            if data.strip().lower() == "hello":
                response = "Hello, client!"
                for char in response:
                    await websocket.send_text(char)
                    await asyncio.sleep(0.1)
                await websocket.send_text("__END__")   # <-- add here

            elif data.strip().lower() == "bye":
                response = "Goodbye, client!"
                for char in response:
                    await websocket.send_text(char)
                    await asyncio.sleep(0.1)
                await websocket.send_text("__END__")   # <-- add here

            else:
                response = "Unknown command. Please send 'hello' or 'bye'."
                for char in response:
                    await websocket.send_text(char)
                    await asyncio.sleep(0.1)
                await websocket.send_text("__END__")   # <-- add here

    except WebSocketDisconnect:
        print("Client disconnected")
    finally:
        await websocket.close()
        print("WebSocket closed")
