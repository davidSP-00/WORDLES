import { useContext } from "react"
import { Image, Text, TouchableOpacity } from "react-native"
import { View } from "react-native-animatable"
import { tabs } from "../../data/tabs"
import { WordContext } from "../context/WordContext"
import { TabButton } from "./TabButton"
export interface Props{
    currentTab:string;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}
export const SideBar = ({currentTab,setCurrentTab}:Props) => {
  const {auth} = useContext(WordContext);
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

          <TabButton currentTab={currentTab} title={tabs.WORDLE} name="game-controller"  setCurrentTab={setCurrentTab}/>
          <TabButton currentTab={currentTab} title={tabs.Estadísticas} name="bar-chart" setCurrentTab={setCurrentTab}/>
          <TabButton currentTab={currentTab} title={tabs.MiColección} name="archive" setCurrentTab={setCurrentTab}/>
         {!auth&& <TabButton currentTab={currentTab} title={tabs.Registro} name="enter-outline" setCurrentTab={setCurrentTab}/>}
          {!auth&&<TabButton currentTab={currentTab} title={tabs.IniciarSesion} name="log-in" setCurrentTab={setCurrentTab}/>}
         {/*  <TabButton currentTab={currentTab} title="Settings" name="cog" setCurrentTab={setCurrentTab}/> */}

        </View>

        <View>
        {auth&&<TabButton currentTab={currentTab} title={tabs.CerrarSesion} name="log-out-outline" setCurrentTab={setCurrentTab}/>}
         </View>

      </View>
  )
}
