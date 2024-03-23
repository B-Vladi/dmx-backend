import SerialService from '#services/serial.ts'
import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@Controller('serial')
@ApiTags('Serial')
export default class SerialController {
  constructor(private readonly serial: SerialService) {
    this.serial = serial
  }

  @Get('/')
  @ApiOperation({ summary: 'Returns serial ports info' })
  @ApiResponse({
    status: 200,
    type: Array,
    description: 'Port info list',
  })
  getDevices() {
    if (process.env.EMULATION === '1') {
      return [
        {
          "path": "COM13",
          "manufacturer": "FTDI",
          "serialNumber": "A16B3ZTN",
          "pnpId": "FTDIBUS\\VID_0403+PID_6001+A16B3ZTNA\\0000",
          "friendlyName": "USB Serial Port (COM13)",
          "vendorId": "0403",
          "productId": "6001"
        }
      ];
    } else {
      return this.serial.list();
    }
  }
}
