import { Text, View } from "react-native";
import { Button } from "../components/button/button";
import { useAuth, useUser } from "@clerk/clerk-expo";
export default function Index() {
  
  const{signOut} = useAuth()
  const{user}= useUser()
  return (
    <View
      className="flex-1 justify-center items-center"
    >
      <Text className="text-6xl text-primary">Welcome {user?.fullName}</Text>
      <Button icon="exit" tittle="sair" onPress={()=>signOut()}></Button>
    </View>
  );
}
