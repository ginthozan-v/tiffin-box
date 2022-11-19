import React from 'react';
import './index.css';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import Header from '../../components/Layout/Header';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Good morning makkale!" />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
