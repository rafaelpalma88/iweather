import { Text, View } from 'react-native';
import { SvgProps } from "react-native-svg";

import { styles } from './styles';

type Props = {
  icon: React.FC<SvgProps>;
  title: string;
  value: string;
  isLast?: boolean;
}

export function WeatherItem({ icon: Icon, title, value, isLast = false }: Props) {
  console.log('WeatherItem isLast', isLast)
  console.log('WeatherItem title', title)
  console.log('WeatherItem value', value)
  console.log('WeatherItem Icon', Icon)
  return (
    <View style={[styles.container, !isLast && styles.borderBottom]} testID="view-container">
      <Icon width={24} height={24} />

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}