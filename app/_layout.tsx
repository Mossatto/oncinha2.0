import { Stack } from "expo-router";
import './globals.css'
import { Slot, router } from "expo-router";
import{ClerkProvider, useAuth} from "@clerk/clerk-expo"
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { tokenCache } from "./storage/tokenCache";

const PUBLIC_CLERK_PUBLISHABLE_KEY = 'pk_test_dmlhYmxlLWJ1cnJvLTQuY2xlcmsuYWNjb3VudHMuZGV2JA'

function InitialLayout(){

    const {isLoaded, isSignedIn} = useAuth()


    useEffect(() => {
     
      if(!isLoaded) return
     
        if(isSignedIn){
          router.replace(("/(auth)"))
        }else{
          router.replace("/(public)")
        }
    },[isSignedIn])
      
      return  isLoaded? <Slot/> : (

        <ActivityIndicator/>
      )

    
    
    
}


export default function RootLayout() {
  return (
  <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
    <InitialLayout/>
    
  </ClerkProvider>)
}
