import { Image, Text, TouchableOpacity } from "react-native"
import { View } from "react-native-animatable"
import { TabButton } from "./TabButton"
export interface Props{
    currentTab:string;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}
import images from "../../assets"
export const SideBar = ({currentTab,setCurrentTab}:Props) => {
  return (
    <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image source={images.profile} style={{
          width: 60,
          height: 60,
          borderRadius: 2,
          marginTop: 8
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>Jenna Ezarik</Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>View Profile</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }} >
          {
            // Tab Bar Buttons....
          }

          <TabButton currentTab={currentTab} title="Home" src={images.home}  setCurrentTab={setCurrentTab}/>
          <TabButton currentTab={currentTab} title="Resultado del día" src={images.search} setCurrentTab={setCurrentTab}/>
          <TabButton currentTab={currentTab} title="Mi Colección" src={images.notification} setCurrentTab={setCurrentTab}/>
          <TabButton currentTab={currentTab} title="Settings" src={images.settings} setCurrentTab={setCurrentTab}/>

        </View>

        <View>
        <TabButton currentTab={currentTab} title="LogOut" src={images.logout} setCurrentTab={setCurrentTab}/>
         </View>

      </View>
  )
}
