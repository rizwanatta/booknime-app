Last login: Thu Jun 16 10:39:33 on ttys006
╭─riz@Rizwans-MacBook-Pro.local ~/Documents/trainerDojo/booknime/booknime_app  ‹master*› 
╰─➤  nvim package.json 
╭─riz@Rizwans-MacBook-Pro.local ~/Documents/trainerDojo/booknime/booknime_app  ‹master*› 
╰─➤  clear






















╭─riz@Rizwans-MacBook-Pro.local ~/Documents/trainerDojo/booknime/booknime_app  ‹master*› 
╰─➤  nvim app.js
╭─riz@Rizwans-MacBook-Pro.local ~/Documents/trainerDojo/booknime/booknime_app  ‹master*› 
╰─➤  nvim App.js 























  7 export default function App() {                                                 
  8                                                                                 
  9   const [incomingMessage, setIncomingMessage] = useState();                     
 10                                                                                 
 11   useEffect(()=>{                                                               
 12                                                                                 
 13     axios.get('http://192.168.1.102:3000/').then(response=>{                    
 14                                                                                 
 15       if (response.status === 200){                                             
 16         setIncomingMessage(response.data)                                                
 17       }                                                                         
 18                                                                                 
 19     }).catch(error=>{                                                           
 20         Alert.alert('SOMETHING WENT WRONG', error.message);                     
 21     })                                                                          
 22                                                                                 
 23   },[])                                                                         
 24                                                                                 
 25                                                                                 
 26   return (                                                                      
 27     <View style={styles.container}>                                             
 28       <Text>{incomingMessage}</Text>                                            
 29       <StatusBar style="auto" />                                                
 30     </View>                                                                     
 31   );                                                                            
 NORMAL  SPELL [EN]   master⚡  <p.js   javascript     utf-8    39% :16/41☰ :33 
"App.js" 41L, 828B written                                                           

