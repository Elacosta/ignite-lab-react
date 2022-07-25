import { VStack } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { Header } from '../components/Header';

export function Details() {

  type RouteParms = {
    orderId : string;
  }

  const route = useRoute();
  const {orderId} = route.params as RouteParms;
  return (
    <VStack flex={1} bg='gray.700'>
        <Header title='Solicitação' />
    </VStack>
  );
}