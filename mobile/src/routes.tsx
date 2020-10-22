import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from "./pages/OrphanagesMap";
import OrphanagesDetails from "./pages/OrphanageDetails";

import SelectMapPosition from "./pages/CreateOrphanage/SelectMapPosition";
import OrphanageData from "./pages/CreateOrphanage/OrphanageData";
import Header from "./components/Header";

function routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}>
        <Screen name='OrphanagesMap' component={OrphanagesMap} />
        <Screen
          name='OrphanageDetails'
          component={OrphanagesDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancelButton={false} title='Orphanage' />,
          }}
        />
        <Screen 
          name='SelectMapPosition' 
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title='Select position on the map' />,
          }} 
        />
        <Screen 
          name='OrphanageData' 
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title='Register the orphanage data' />,
          }} 
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default routes;
