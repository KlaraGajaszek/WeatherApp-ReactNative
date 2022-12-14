import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

export const WindIcon = () => {
  const theme = useTheme();

  return (
    <Svg width={30} height={30}>
      <Path
        d="M30 14a4 4 0 1 0-8 0h2c0-1.105.888-2 2-2 1.105 0 2 .888 2 2 0 1.105-.89 2-2.004 2H3v2h23.002A4.002 4.002 0 0 0 30 14zm-9-4c0-2.21-1.795-4-4-4-2.21 0-4 1.79-4 3.997V10h2c0-1.105.888-2 2-2 1.105 0 2 .888 2 2 0 1.105-.897 2-2.006 2H5v2h12.004A4.001 4.001 0 0 0 21 10zm5 13c0 1.657-1.347 3-3 3-1.657 0-3-1.342-3-2.991V23h2c0 .552.444 1 1 1 .552 0 1-.444 1-1 0-.552-.449-1-1.007-1H9v-2h14c1.657 0 3 1.347 3 3z"
        fill={theme.palette.text.primary}
      />
    </Svg>
  );
};
