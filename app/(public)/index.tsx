import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '../components/button/button'
import * as WebBrowser from "expo-web-browser"
import { Platform } from "react-native"
import { useOAuth} from '@clerk/clerk-expo'
import * as Liking from "expo-linking"
import { Link } from 'expo-router'
WebBrowser.maybeCompleteAuthSession()

const login = () => {   

    const googleOAuth =useOAuth({strategy: "oauth_google"})
    const [isLoading,setIsLoading] = useState(false)

    async function onGoogleSigIn() {
        
        try {
             setIsLoading(true)
             
             const redirectUrl = Liking.createURL("/")

             const oAuthFlow = await googleOAuth.startOAuthFlow({redirectUrl})

             if(oAuthFlow.authSessionResult?.type==="success")
                if(oAuthFlow.setActive){
                    await oAuthFlow.setActive({session : oAuthFlow.createdSessionId})
                }else{
                    setIsLoading(false )
                }

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (Platform.OS !== "web") {
            WebBrowser.warmUpAsync()
        }

        return () => {
            if (Platform.OS !== "web") {
                WebBrowser.coolDownAsync()
            }
        }
    }, [])

    return (
        <View>
            <Text>Entrar</Text>
            <Button icon='logo-google' tittle='Entrar com Google' onPress={onGoogleSigIn}
            isLoading= {isLoading} />
            
            <Link href={'/register'}>Registrar</Link>
        </View>
    )
}

export default login
