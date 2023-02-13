import React from "react";
import { SvgXml } from "react-native-svg";
import { RestaurantCard, RestaurantCardCover, Icon, Address, Rating, Info, Section, SectionEnd } from "./restaurant-info.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://i1.adis.ws/i/canon/pro-inside-professional-food-photography-1_46a998f373b44dc583ee52d9448ece04?$media-collection-full-dt$',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((i) => (
              <SvgXml key={i} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant='error' >
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position='left' size='large' />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position='left' size='large' />
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}

  