import axios from 'axios';
 

export default async function CountDataOut(location:any) {

  const BASE_URL = null
  const time = new Date()

  interface dataType {
    time: any
    location: any
  }

  interface ops {
    method: string,
    url: any,
    data: dataType
  }
  

  const option:ops = {
    method: 'post',
    url: BASE_URL,
    data: {
      time: time,
      location: location
    }
  }

  if (BASE_URL) {
      const res = await axios(option);

  } else {
    console.log('데이터 보내기가 준비되지 않았어요.')
    console.log('api내 정보 도달', location)
  }

}