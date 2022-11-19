import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import './index.css';

import Tab1 from '../../pages/Tab1';
import Tab2 from '../../pages/Tab2';
import Tab3 from '../../pages/Tab3';
import HomePage from '../../pages/HomePage';

import {
  fastFood,
  home,
  information,
  person,
  reorderFour,
} from 'ionicons/icons';

export const TabRoute: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="tabBar">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={reorderFour} />
            <IonLabel>Food</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={information} />
            <IonLabel>Details</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} className="homeIcon" />
          </IonTabButton>
          <IonTabButton href="/tab1">
            <IonIcon icon={fastFood} />
            <IonLabel>Orders</IonLabel>
          </IonTabButton>
          <IonTabButton href="/tab2">
            <IonIcon icon={person} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};
