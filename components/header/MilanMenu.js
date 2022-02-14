import React, { useState } from 'react';
import MilanSettings from '../settings/MilanSettings';
import { BottomNavigation, Text } from 'react-native-paper';
import MilanDashboard from '../dashboard/MilanDashboard';
import Register from '../login/Register';

const MilanMenu = (props) => {
  console.log("navigation", props)
  const { navigation } = props;
  console.log("navigation", navigation)
  const [index, setIndex] = React.useState(0);
  const [navi, setNavi] = useState(navigation);
  const [routes] = React.useState([
    { key: 'account', title: 'Your Account', icon: 'account', navi: navigation },
    { key: 'fav', title: 'Favorites', icon: 'cards-heart', navi: navigation },
    { key: 'settings', title: 'Settings', icon: 'account-cog-outline', navi: navigation },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'account':
        return <MilanDashboard navigation={navi} fav={{isFav:true}}></MilanDashboard>;
      case 'fav':
        return <MilanDashboard navigation={navi} fav={{isFav:false}}></MilanDashboard>;
      case 'settings':
        return <MilanSettings></MilanSettings>
    }
  }

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MilanMenu;
