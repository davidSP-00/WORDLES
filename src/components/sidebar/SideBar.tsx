import { Image, Text, TouchableOpacity } from "react-native"
import { View } from "react-native-animatable"
import { TabButton } from "./TabButton"
export interface Props{
    currentTab:string;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}
export const SideBar = ({currentTab,setCurrentTab}:Props) => {
  return (
    <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image source={require( '../../assets/profile.png')} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
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

          <TabButton currentTab={currentTab} title="Home" image="home.png"  setCurrentTab={setCurrentTab}/>
          <TabButton currentTab={currentTab} title="Search" image="search.png" setCurrentTab={setCurrentTab}/>
          <TabButton currentTab={currentTab} title="Notification" image="bell.png" setCurrentTab={setCurrentTab}/>
          <TabButton currentTab={currentTab} title="Settings" image="settings.png" setCurrentTab={setCurrentTab}/>

        </View>

        <View>
        <TabButton currentTab={currentTab} title="LogOut" image="logout.png" setCurrentTab={setCurrentTab}/>
         </View>

      </View>
  )
}
