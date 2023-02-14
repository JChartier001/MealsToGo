import React, { useContext } from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { RestaurantInfo } from '../components/restaurant-info.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { ViewArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurant/restaurant.context';
import { Search } from "../components/search.component"


const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
margin-left: -25px`

const LoadingContainer = styled.View`
position: absolute;
top: 50%;
left:50%
`

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <ViewArea>
    <Search/>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      <RestaurantList
        data={restaurants}
        keyExtractor={(item) => item.placeId}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => {
          return (
            <Spacer variant='bottom' size='large'>
              <RestaurantInfo restaurant={item} />
            </Spacer>
          );
        }}
      />
    </ViewArea>
  );
};
