import { TouchableOpacity, TouchableOpacityProps, Text,ActivityIndicator } from "react-native";
import {Ionicons} from "@expo/vector-icons"
import {styles} from "./styles"

interface ButtonProps extends TouchableOpacityProps{

    tittle: string
    isLoading?: boolean
    icon: keyof typeof Ionicons.glyphMap
}

export function Button({tittle,isLoading=false, icon,...rest}: ButtonProps){

    return (
        <TouchableOpacity style = {styles.container} disabled = {isLoading} activeOpacity={0.8} {...rest}>
            {isLoading ? <ActivityIndicator/> :(
                <>
                <Ionicons style = {styles.icon} name={icon}/>
                <Text style = {styles.text}>{tittle}</Text>
                </>
            )}            

            
        </TouchableOpacity>
    )
}