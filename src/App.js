import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import { useLocalStorage } from './hooks';
import BiorhythmCard from './components/BiorhythmCard';

function App() {
  const [name, setName] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [birthDate, setBirthDate] = useLocalStorage('birthdate','');

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm-Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        { birthDate && targetDate &&
          <BiorhythmCard  birthDate = {birthDate} targetDate = {targetDate}/>
        }

        <IonItem>
          <IonLabel position = "floating">First Name</IonLabel>
          <IonInput type = "text" value = {name}
            onIonChange = {
              (event) => setName(event.detail.value)
          }/>
        </IonItem>

        <IonItem>
          <IonLabel position = "floating">Date of Birth</IonLabel>
          <IonDatetime displayFormat = "D MMM YYYY"
          value = {birthDate} onIonChange = {
            (event) => setBirthDate(event.detail.value)
          }
          />
        </IonItem>

        <IonItem>
          <IonLabel position = "floating">Target Date</IonLabel>
          <IonDatetime displayFormat = "D MMM YYYY"
          value = {targetDate} onIonChange = {
            (event) => setTargetDate(event.detail.value)
          }
          />
        </IonItem>

      </IonContent>
    </IonApp>
  );
}

export default App;
