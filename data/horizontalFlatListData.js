var horizontalStatus = {
    rainy: {
        ios: 'ios-rainy',
        android: 'md-rainy',
    },
    cloud: {
        ios: 'ios-cloudy',
        android: 'md-cloudy',
    },
    thunderstorm: {
        ios: 'ios-thunderstorm',
        android: 'md-thunderstorm',
    },
    sunny: {
        ios: 'ios-sunny',
        android: 'md-sunny',
    },
};

var horizontalFlatListData = [
    {
        hour: '1 AM',
        status: horizontalStatus.cloud,
        degress: 60,
    },
    {
        hour: '2 AM',
        status: horizontalStatus.cloud,
        degress: 62,
    },
    {
        hour: '3 AM',
        status: horizontalStatus.cloud,
        degress: 63,
    },
    {
        hour: '4 AM',
        status: horizontalStatus.cloud,
        degress: 60,
    },
    {
        hour: '5 AM',
        status: horizontalStatus.cloud,
        degress: 62,
    },
    {
        hour: '6 AM',
        status: horizontalStatus.sunny,
        degress: 64,
    },
    {
        hour: '7 AM',
        status: horizontalStatus.sunny,
        degress: 68,
    },
    {
        hour: '8 AM',
        status: horizontalStatus.thunderstorm,
        degress: 66,
    },
    {
        hour: '9 AM',
        status: horizontalStatus.thunderstorm,
        degress: 60,
    },
    {
        hour: '10 AM',
        status: horizontalStatus.rainy,
        degress: 60,
    },
    {
        hour: '11 AM',
        status: horizontalStatus.rainy,
        degress: 60,
    },
];

export { horizontalStatus };
export { horizontalFlatListData };