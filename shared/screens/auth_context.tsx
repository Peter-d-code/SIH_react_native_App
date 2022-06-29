import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthData, authService} from './authService';

type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(user:string,Dob:string, password:string):void;
  signOut(): void;
  login(Username:string, Password:string): void,
Error_handling_(arg:boolean):void;
boolean_:boolean,
input_fieds(data:Array<string>, Username):void

};

//Create the Auth Context with the data type specified
//and a empty object
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();

  //the AuthContext start with loading equals true
  //and stay like this, until the data be load from Async Storage
  const [loading, setLoading] = useState(true);
const [boolean_, setBoolean] = useState(false)
const [image_uri, setImageuri] = useState('')
  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorage function.
    loadStorageData();
  }, []);
const Error_handling_ = (arg:boolean)=>{
  setBoolean(arg)
}
  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
    } finally {
      //loading finished
      setLoading(false);
    }
  }

const input_fieds = async ([...data],Username )=>{
  await fetch("http://192.168.1.5:8001/input_fields", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({data: data, Username: Username}),
  }).then(res=>res.json())
}
const signIn = async (user_name , DOB, password) => {
    //call the service passing credential (email and password).
    //In a real App this data will be provided by the user from some InputText components.
    const _authData = await authService.signIn(user_name, DOB,password)
    console.log(_authData)
    if(_authData.Username === undefined)
    Error_handling_(true)
    //Set the data in the contex,t, so the App can be notified
    //and send the user to the AuthStack
    else{
    setAuthData(_authData);
    AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
    }
    //Persist the data in the Async Storage
    //to be recovered in the next user session.
 
  };
  const login = async (Username:string, Password:string)=>{
    // const [rspnse, setResponse] = useState()
    const body = {
      Username: Username,
       Password: Password
    }
    // console.log(Username, Password)
    let istrue_password:any
 if(Username && Password)
 istrue_password = await fetch("http://192.168.1.5:8001/login", {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(body),
 }).then(res=>res.json())
 console.log( istrue_password)
 if(!istrue_password.Status){
  setAuthData(istrue_password)
  AsyncStorage.setItem('@AuthData', JSON.stringify(istrue_password));
 }
  else  {
  setAuthData(undefined)
  Error_handling_(true)
  }
  // console.log(boolean_)
// console.log(istrue_password)
 }
  const signOut = async () => {
    //Remove data from context, so the App can be notified
    //and send the user to the AuthStack


    //Remove the data from Async Storage
    //to NOT be recoverede in next session.
    await AsyncStorage.removeItem('@AuthData');
    setAuthData(undefined);
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{authData, loading, signIn, signOut, login, boolean_,Error_handling_, input_fieds}}>
      {children}
    </AuthContext.Provider>
  );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {AuthContext, AuthProvider, useAuth};