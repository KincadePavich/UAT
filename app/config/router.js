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
import Details from '../screens/Details';

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
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
  FoodDetails: {
    screen: Details,
    navigationOptions: {
      title: 'Back to Food Deals',
    }
  }
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
  BarDetails: {
    screen: Details,
    navigationOptions: {
      title: 'Back to Bar and Night Life Deals',
    }
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
  ShopDetails: {
    screen: Details,
    navigationOptions: {
      title: 'Back to Shopping Deals',
    }
  }
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
  CoffeeDetails: {
    screen: Details,
    navigationOptions: {
      title: 'Back to Coffee and Tea Deals',
    }
  }
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
  PersonalDetails: {
    screen: Details,
    navigationOptions: {
      title: 'Back to Salon and Personal Care Deals',
    }
  }
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
  SpecialtyDetails: {
    screen: Details,
    navigationOptions: {
      title: 'Back to Speciality Store Deals',
    }
  }
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
      tabBarLabel: 'Location',
    },
  },
}, {
  tabBarOptions: {
    scrollEnabled: true,
    tabStyle: {
      width: 150,
      height: 50,
    },
    style: {
      backgroundColor: '#002469',
    },
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      header: null
    },
  },
});
