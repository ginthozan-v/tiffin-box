import React from 'react';
import './index.css';
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { notifications } from 'ionicons/icons';

interface ContainerProps {
  title: string;
}

const Header: React.FC<ContainerProps> = ({ title }) => {
  return (
    <IonHeader class="ion-no-border">
      <IonToolbar className="header">
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="primary">
          <IonButton>
            <IonIcon icon={notifications} className="notificationIcon" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
