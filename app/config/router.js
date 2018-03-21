import { TabNavigator, StackNavigator } from 'react-navigation';
import Bars from '../screens/Bars';
import BarsMap from '../screens/BarsMap';
import Food from '../screens/Food';
import FoodMap from '../screens/FoodMap';
import Shops from '../screens/Shops';
import ShopsMap from '../screens/ShopsMap';
import Coffee from '../screens/Coffee';
import CoffeeMap from '../screens/CoffeeMap';
import Personal from '../screens/Personal';
import PersonalMap from '../screens/PersonalMap';
import Specialty from '../screens/Specialty';
import SpecialtyMap from '../screens/SpecialtyMap';
import Settings from '../screens/Settings';
import Locate from '../screens/Locate';

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      headerTitleStyle: { alignSelf: 'center', textAlign: 'center' }
    },
  },
  Locate: {
    screen: Locate,
    navigationOptions: {
      title: 'Location Preferences',
    },
  }
});

export const FoodStack = StackNavigator({
  Food: {
    screen: Food,
    navigationOptions: {
      header: null
    },
  },
  FoodMap: {
    screen: FoodMap,
    navigationOptions: {
      header: null
    },
  },
});
export const BarsStack = StackNavigator({
  Bars: {
    screen: Bars,
    navigationOptions: {
      header: null
    },
  },
  BarsMap: {
    screen: BarsMap,
    navigationOptions: {
      header: null
    },
  },
});
export const ShopStack = StackNavigator({
  Shops: {
    screen: Shops,
    navigationOptions: {
      header: null
    },
  },
  ShopsMap: {
    screen: ShopsMap,
    navigationOptions: {
      header: null
    },
  },
});
export const CoffeeStack = StackNavigator({
  Coffee: {
    screen: Coffee,
    navigationOptions: {
      header: null
    },
  },
  CoffeeMap: {
    screen: CoffeeMap,
    navigationOptions: {
      header: null
    },
  },
});
export const PersonalStack = StackNavigator({
  Personal: {
    screen: Personal,
    navigationOptions: {
      header: null
    },
  },
  PersonalMap: {
    screen: PersonalMap,
    navigationOptions: {
      header: null
    },
  },
});
export const SpecialtyStack = StackNavigator({
  Specialty: {
    screen: Specialty,
    navigationOptions: {
      header: null
    },
  },
  SpecialtyMap: {
    screen: SpecialtyMap,
    navigationOptions: {
      header: null
    },
  },
});

export const Tabs = TabNavigator({
  Food: {
    screen: FoodStack,
    navigationOptions: {
      tabBarLabel: 'Food',
    },
  },
  Bars: {
    screen: BarsStack,
    navigationOptions: {
      tabBarLabel: 'Bars',
    },
  },
  Shops: {
    screen: ShopStack,
    navigationOptions: {
      tabBarLabel: 'Shops',
    },
  },
  Coffee: {
    screen: CoffeeStack,
    navigationOptions: {
      tabBarLabel: 'Coffee',
    },
  },
  PersonalCare: {
    screen: PersonalStack,
    navigationOptions: {
      tabBarLabel: 'Personal Care',
    },
  },
  Speciality: {
    screen: SpecialtyStack,
    navigationOptions: {
      tabBarLabel: 'Speciality',
    },
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      tabBarLabel: 'Settings',
    },
  },
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#002469',
    },
    scrollEnabled: true,
    tabStyle: {
      width: 150,
      height: 50,
    }
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      header: null
    },
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#002469',
    activeBackgroundColor: '#002469',
    inactiveBackgroundColor: '#002469',
    style: {
      backgroundColor: '#002469'
    }
  },
});
