import { TabNavigator, StackNavigator } from 'react-navigation';
import Bars from '../screens/Bars';
import BarsMap from '../screens/BarsMap';
import Food from '../screens/Food';
import FoodMap from '../screens/FoodMap';
import Shops from '../screens/Shops';
import ShopsMap from '../screens/ShopsMap';
import Settings from '../screens/Settings';
import Locate from '../screens/Locate';
import Category from '../screens/Category';

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
  },
  Category: {
    screen: Category,
    navigationOptions: {
      title: 'Category Preferences',
    },
  }
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
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      tabBarLabel: 'Options',
    },
  },
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#002469',
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
