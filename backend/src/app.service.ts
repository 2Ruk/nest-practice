import {Injectable} from '@nestjs/common';


@Injectable()
export class AppService {
  constructor() {
  }

  // async getHello(): Promise<any> {
  //   const nickName = encodeURI('반ㅋ반ㅋ치ㅋ킨ㅋ');
  //   const playerId = '52a69e7c3e4bfe73223cff7615990ae3';
  //   const url = `https://api.neople.co.kr/cy/players?nickname=${nickName}&apikey=HWpkkR1xsWK6cfno15scuGXi8GEAx2UM`;
  //
  //   // const data = this.httpService
  //   //   .get<any>(url)
  //   //   .pipe(map((response) => response));
  //   const data = this.httpService.get<any>(url).pipe(
  //       map(response => response.data)
  //   )
  //   const real = await lastValueFrom(data);
  //   console.log({real});
  //   console.log(real.rows)
  //   console.log(data);
  //   // console.log(real)
  //
  //   return data;
  // }

  getBye(): string {
    return 'dd';
  }
}
