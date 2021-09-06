import dayjs from 'dayjs';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
} from '@ionic/react';
import React from 'react';
import { calculateBiorhythms } from "../calculation";

function formatDate(isoString) {
    return dayjs(isoString).format('D MMM YYYY');
}

function BiorhythmCard({birthDate, targetDate}) {
    const {Physical, Emotional, Intellectual} = calculateBiorhythms(birthDate, targetDate);
    return (
        <IonCard>
            <IonCardHeader>
            <IonCardTitle>{formatDate(new Date())}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <p>Physical: { Physical.toFixed(4) }</p>
                <p>Emotional: { Emotional.toFixed(4) }</p>
                <p>Intellectual: { Intellectual.toFixed(4) }</p>
            </IonCardContent>
        </IonCard>
        
    );
}

export default BiorhythmCard;