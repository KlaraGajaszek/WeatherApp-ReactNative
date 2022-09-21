import Svg, { Defs, Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

export const RainIcon = () => {
  const { palette } = useTheme();

  return (
    <Svg fill={palette.text.primary} viewBox="0 0 64 64" width="30" height="30">
      <Defs></Defs>
      <Path d="M49 38a17.5 17.5 0 0 1-35 0C14 22.7 28.22 8.48 31.5 8.48S49 22.7 49 38z" />
    </Svg>
  );
};
