import axios from 'axios';
 

export default async function CountDataOut() {

  const BASE_URL = null
  const time = new Date()
  const site = null

  interface dataType {
    time: any
    site: any
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
      site: site
    }
  }

  if (BASE_URL) {
      const res = await axios(option);

  } else {

  }

}