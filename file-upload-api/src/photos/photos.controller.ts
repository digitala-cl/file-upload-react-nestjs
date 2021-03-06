import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('photos')
export class PhotosController {

    @Post('upload')
    @UseInterceptors(FileInterceptor('photo'))
    uploadSingle(@UploadedFile() file){
        console.log(file)
    }

}
