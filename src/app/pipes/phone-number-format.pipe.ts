import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'appendCodePipe'
})

export class AppendCodePipe implements PipeTransform {

    transform(phoneNo: number, code: string ): string {
        return code + phoneNo;
    }
}
