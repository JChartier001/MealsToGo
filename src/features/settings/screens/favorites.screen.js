import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { FavoritesContext } from "../../../services/favorites/favorites.context";

import { ViewArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { RestaurantInfo } from "../../restaurants/components/restaurant-info.component";

const NoFavoritesArea = styled(ViewArea)`
  align-items: center;
  justify-content: center;
`;
export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <ViewArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </ViewArea>
  ) : (
    <NoFavoritesArea>
      <Text center>No favorites yet</Text>
    </NoFavoritesArea>
  );
};
