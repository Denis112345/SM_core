import * as Modbus from 'jsmodbus';
import { Socket } from 'net';

const socket = new Socket();
const client = new Modbus.client.TCP(socket);

const options = {
  host: '127.0.0.1',
  port: 502
};

// Подключаемся
socket.on('connect', async () => {
    try {
        const res = await client.readHoldingRegisters(0, 10);
        console.log(res.response.body.values);
    } catch (e) {
        console.error(e);
    }
});

socket.connect(options);