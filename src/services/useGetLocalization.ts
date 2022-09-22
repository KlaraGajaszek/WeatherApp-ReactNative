import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import { GeoPosition } from '../helpers/getUrl';
import { ErrorTextMessage } from '../constants/errors';

export const useGetLocalization = () => {
  const [localization, setLocalization] = useState<GeoPosition>({ latitude: undefined, longitude: undefined });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') setErrorMessage(ErrorTextMessage.permissionDescription);

      try {
        const { coords } = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
        const { latitude, longitude } = coords;

        setLocalization({ latitude, longitude });
      } catch (e) {
        setErrorMessage(ErrorTextMessage.locationDescription);
      }
    })();
  }, []);

  return { localization, errorMessage };
};
