import { useState } from "react";

export type AuthData = {
    Token?: string;
    Username: string;
    Refresh_Token?:string,
    Password: string
  };
  const signIn = async(User_name: string, DO_B: string, password:string): Promise<AuthData> => {
    // this is a mock of an API call, in a real app
    // will be need connect with some real API,
    // send email and password, and if credential is corret
    //the API will resolve with some token and another datas as the below
    const userbody = {
      Username: User_name,
      DOB: DO_B,
      Password: password
    }
    const Post_Data:any = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userbody),
    }

    const {Token, Username, Refresh_Token, Password}  =  await  fetch("http://192.168.1.5:8001/sign_in", Post_Data).then(Res => Res.json)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          Token: Token,
          Username: Username,
          Refresh_Token:  Refresh_Token,
          Password: Password
        });
      }, 1000);
    });
  };
  
  export const authService = {
    signIn,
  };


//   const signIn = async (User_name: string, DO_B:string) => {
//   //  const [auth_data, setauth_Data] = useState<AuthData | any>()
//     // this is a mock of an API call, in a real app
//     // will be need connect with some real API,
//     // send email and password, and if credential is corret
//     // //the API will resolve with some token and another datas as the below
    // const userbody = {
    //   Username: User_name,
    //   DOB: DO_B
    // }
    // const Post_Data:any = {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(userbody),
    // }
//    await  fetch('http://192.168.1.4:8001/sign_in', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     userbody
//   })
// })
// // const fetch_ = async ()=>{   try{
//   // const {Token, Username, Refresh_Token}  =  await  fetch("http://192.168.1.4:8000/sign_in", Post_Data).then(Res => Res.json()).catch(e=>console.log(e))}
// //   catch(Error){
// //     console.log(Error)
// //   }
// // }

// //  fetch_()
// //    return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve({
// //         Token : Token,
// //         Username: Username,
// //         Refresh_Token: Refresh_Token
// //       });
// //     }, 1000);
// //   });
// // };
//   }
//   export const authService = {
//     signIn,
//   };