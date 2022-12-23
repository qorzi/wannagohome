import { atom } from "recoil";

// // 기본형
// const textState = atom({
//   key: 'textState', // unique ID (with respect to other atoms/selectors)
//   default: '', // default value (aka initial value)
// });


// // 타입 선언과 사용
// export interface IUser {
//   id: string;
//   pwd: string;
//   name: string;
// }

// export const user = atom<IUser>({
//   key: "user",
//   default: {
//     id: "admin",
//     pwd: "admin",
//     name: "관리자"
//   }
// });

// export interface Modal {
//   open: boolean
// }

interface RegionType {
  [key: string]: {
    [key: string]: number
  }
}

interface RegionDataType {
  [key: string]: RegionType | string | number
}

export const countData = atom({
  key: "countData",
  default: [] as RegionDataType[]
})