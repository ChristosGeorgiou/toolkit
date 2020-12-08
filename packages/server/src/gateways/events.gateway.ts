import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('join')
  join(@ConnectedSocket() socket: Socket, @MessageBody() data: any) {
    socket.leaveAll()
    socket.join(data.room)
    socket.client['username'] = data.user
    console.log(`client ${socket.client.id} joined room ${data.room}`)
    this.broadcastRoomUpdate(data.room)
  }

  @SubscribeMessage('event')
  event(@MessageBody() data: any) {
    this.server.in(data.room).emit("event", data)
  }

  broadcastRoomUpdate(room: string) {

    const usernames = Object
      .keys(this.server.in(room).sockets)
      .map(c => this.server.in(room).sockets[c].client["username"])
    // .reduce((l, x) => { if (!l[x]) { l.push(x); } return l }, [])
    console.log(usernames)
    this.server.in(room).emit("users", {
      users: usernames
    });
  }
}
