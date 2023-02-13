import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { RestaurantInfo } from '../components/restaurant-info.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { ViewArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurant/restaurant.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <ViewArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => {
          console.log(JSON.stringify(item, null, 4));
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
