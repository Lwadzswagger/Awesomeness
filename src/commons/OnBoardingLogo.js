import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image } from 'react-native';

import { images } from '../constants/images';

const OnboardingLogo = () => (
    <Box center>
        <Box mb="sm">
            <Image source={images.logo} />
        </Box>
        <Box mb="sm">
            <Text size='2xl' bold>
            Kasi
        <Text color="green" bold size="2xl">
        Lam
        </Text>
            </Text>
        </Box>
        <Text size="sm">
        All your kasi shopping in one stop.</Text>
    </Box>
);

export default OnboardingLogo; 