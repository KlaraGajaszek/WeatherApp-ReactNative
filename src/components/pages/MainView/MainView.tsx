import { ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components/native';

import { MainWeatherSection } from '../../organisms/MainWeatherSection';
import { ErrorView } from '../ErrorView/ErrorView';

import { useWeatherContext } from '../../../context/weatherContext';

import { StatusContainer } from './MainView.styled';

export const MainView = () => {
  const weatherData = useWeatherContext();
  const {
    palette: { primary, background },
  } = useTheme();

  const gradientColors = [background.primar, background.secondary, background.light, background.dark];

  return (
    <>
      <StatusContainer>
        {weatherData?.loading && <ActivityIndicator size="large" color={primary.light} />}
        {weatherData?.error && <ErrorView />}
      </StatusContainer>
      {weatherData?.data && (
        <LinearGradient colors={gradientColors} locations={[0, 0.2, 0, 1]} style={{ width: '100%', height: '100%' }}>
          <MainWeatherSection />
        </LinearGradient>
      )}
    </>
  );
};
