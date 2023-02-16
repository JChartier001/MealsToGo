import React, { useContext, useState } from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { FavoritesBar } from '../../../components/favorites/favorites-bar.component';
import { RestaurantInfo } from '../components/restaurant-info.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { ViewArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurant/restaurant.context';
import { FavoritesContext } from '../../../services/favorites/favorites.context';

import { Search } from '../components/search.component';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favorites } = useContext(FavoritesContext);

  return (
    <ViewArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }
            >
              <Spacer position='bottom' size='large'>
                <RestaurantInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </ViewArea>
  );
};
