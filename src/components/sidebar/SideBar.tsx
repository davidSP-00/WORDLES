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
        {/* <Image source={images.profile} style={{
          width: 60,
          height: 60,
          borderRadius: 2,
          marginTop: 8
        }}></Image> */}

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>User Name</Text>

       {/*  <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>View Profile</Text>
        </TouchableOpacity> */}

        <View style={{ flexGrow: 1, marginTop: 50 }} >
          {
            // Tab Bar Buttons....
          }

          <TabButton currentTab={currentTab} title="WORDLE" name="game-controller"  setCurrentTab={setCurrentTab}/>
          <TabButton currentTab={currentTab} title="Estadísticas" name="bar-chart" setCurrentTab={setCurrentTab}/>
          <TabButton currentTab={currentTab} title="Mi Colección" name="archive" setCurrentTab={setCurrentTab}/>
         {/*  <TabButton currentTab={currentTab} title="Settings" name="cog" setCurrentTab={setCurrentTab}/> */}

        </View>

        <View>
        <TabButton currentTab={currentTab} title="LogOut" name="log-out-outline" setCurrentTab={setCurrentTab}/>
         </View>

      </View>
  )
}
