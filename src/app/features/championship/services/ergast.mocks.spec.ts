import {StandingsMRData} from '../models/ergast/standings-mrdata.model';
import {ErgastResponse} from '../models/ergast/ergast-response.model';
import {RaceMRData} from '../models/ergast/race-mrdata.model';
import {Season} from '../models/season.model';
import {SeasonDetails} from '../models/season-details.model';

export const fullStandings: ErgastResponse<StandingsMRData> = <ErgastResponse<StandingsMRData>> {
    MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        url: 'http://ergast.com/api/f1/driverstandings/1.json',
        limit: '100',
        offset: '0',
        total: '70',
        StandingsTable: {
            driverStandings: '1',
            StandingsLists: [
                {
                    season: '1950',
                    round: '7',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '30',
                            wins: '3',
                            Driver: {
                                driverId: 'farina',
                                url: 'http://en.wikipedia.org/wiki/Nino_Farina',
                                givenName: 'Nino',
                                familyName: 'Farina',
                                dateOfBirth: '1906-10-30',
                                nationality: 'Italian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'alfa',
                                    url: 'http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One',
                                    name: 'Alfa Romeo',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1951',
                    round: '8',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '31',
                            wins: '3',
                            Driver: {
                                driverId: 'fangio',
                                url: 'http://en.wikipedia.org/wiki/Juan_Manuel_Fangio',
                                givenName: 'Juan',
                                familyName: 'Fangio',
                                dateOfBirth: '1911-06-24',
                                nationality: 'Argentine'
                            },
                            Constructors: [
                                {
                                    constructorId: 'alfa',
                                    url: 'http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One',
                                    name: 'Alfa Romeo',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1952',
                    round: '8',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '36',
                            wins: '6',
                            Driver: {
                                driverId: 'ascari',
                                url: 'http://en.wikipedia.org/wiki/Alberto_Ascari',
                                givenName: 'Alberto',
                                familyName: 'Ascari',
                                dateOfBirth: '1918-07-13',
                                nationality: 'Italian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1953',
                    round: '9',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '34.5',
                            wins: '5',
                            Driver: {
                                driverId: 'ascari',
                                url: 'http://en.wikipedia.org/wiki/Alberto_Ascari',
                                givenName: 'Alberto',
                                familyName: 'Ascari',
                                dateOfBirth: '1918-07-13',
                                nationality: 'Italian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1954',
                    round: '9',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '42',
                            wins: '6',
                            Driver: {
                                driverId: 'fangio',
                                url: 'http://en.wikipedia.org/wiki/Juan_Manuel_Fangio',
                                givenName: 'Juan',
                                familyName: 'Fangio',
                                dateOfBirth: '1911-06-24',
                                nationality: 'Argentine'
                            },
                            Constructors: [
                                {
                                    constructorId: 'maserati',
                                    url: 'http://en.wikipedia.org/wiki/Maserati',
                                    name: 'Maserati',
                                    nationality: 'Italian'
                                },
                                {
                                    constructorId: 'mercedes',
                                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                                    name: 'Mercedes',
                                    nationality: 'German'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1955',
                    round: '7',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '40',
                            wins: '4',
                            Driver: {
                                driverId: 'fangio',
                                url: 'http://en.wikipedia.org/wiki/Juan_Manuel_Fangio',
                                givenName: 'Juan',
                                familyName: 'Fangio',
                                dateOfBirth: '1911-06-24',
                                nationality: 'Argentine'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mercedes',
                                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                                    name: 'Mercedes',
                                    nationality: 'German'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1956',
                    round: '8',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '30',
                            wins: '3',
                            Driver: {
                                driverId: 'fangio',
                                url: 'http://en.wikipedia.org/wiki/Juan_Manuel_Fangio',
                                givenName: 'Juan',
                                familyName: 'Fangio',
                                dateOfBirth: '1911-06-24',
                                nationality: 'Argentine'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1957',
                    round: '8',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '40',
                            wins: '4',
                            Driver: {
                                driverId: 'fangio',
                                url: 'http://en.wikipedia.org/wiki/Juan_Manuel_Fangio',
                                givenName: 'Juan',
                                familyName: 'Fangio',
                                dateOfBirth: '1911-06-24',
                                nationality: 'Argentine'
                            },
                            Constructors: [
                                {
                                    constructorId: 'maserati',
                                    url: 'http://en.wikipedia.org/wiki/Maserati',
                                    name: 'Maserati',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1958',
                    round: '11',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '42',
                            wins: '1',
                            Driver: {
                                driverId: 'hawthorn',
                                url: 'http://en.wikipedia.org/wiki/Mike_Hawthorn',
                                givenName: 'Mike',
                                familyName: 'Hawthorn',
                                dateOfBirth: '1929-04-10',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1959',
                    round: '9',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '31',
                            wins: '2',
                            Driver: {
                                driverId: 'jack_brabham',
                                url: 'http://en.wikipedia.org/wiki/Jack_Brabham',
                                givenName: 'Jack',
                                familyName: 'Brabham',
                                dateOfBirth: '1926-04-02',
                                nationality: 'Australian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'cooper-climax',
                                    url: 'http://en.wikipedia.org/wiki/Cooper_Car_Company',
                                    name: 'Cooper-Climax',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1960',
                    round: '10',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '43',
                            wins: '5',
                            Driver: {
                                driverId: 'jack_brabham',
                                url: 'http://en.wikipedia.org/wiki/Jack_Brabham',
                                givenName: 'Jack',
                                familyName: 'Brabham',
                                dateOfBirth: '1926-04-02',
                                nationality: 'Australian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'cooper-climax',
                                    url: 'http://en.wikipedia.org/wiki/Cooper_Car_Company',
                                    name: 'Cooper-Climax',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1961',
                    round: '8',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '34',
                            wins: '2',
                            Driver: {
                                driverId: 'phil_hill',
                                url: 'http://en.wikipedia.org/wiki/Phil_Hill',
                                givenName: 'Phil',
                                familyName: 'Hill',
                                dateOfBirth: '1927-04-20',
                                nationality: 'American'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1962',
                    round: '9',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '42',
                            wins: '4',
                            Driver: {
                                driverId: 'hill',
                                url: 'http://en.wikipedia.org/wiki/Graham_Hill',
                                givenName: 'Graham',
                                familyName: 'Hill',
                                dateOfBirth: '1929-02-15',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'brm',
                                    url: 'http://en.wikipedia.org/wiki/BRM',
                                    name: 'BRM',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1963',
                    round: '10',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '54',
                            wins: '7',
                            Driver: {
                                driverId: 'clark',
                                url: 'http://en.wikipedia.org/wiki/Jim_Clark',
                                givenName: 'Jim',
                                familyName: 'Clark',
                                dateOfBirth: '1936-03-04',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'lotus-climax',
                                    url: 'http://en.wikipedia.org/wiki/Team_Lotus',
                                    name: 'Lotus-Climax',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1964',
                    round: '10',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '40',
                            wins: '2',
                            Driver: {
                                driverId: 'surtees',
                                url: 'http://en.wikipedia.org/wiki/John_Surtees',
                                givenName: 'John',
                                familyName: 'Surtees',
                                dateOfBirth: '1934-02-11',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1965',
                    round: '10',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '54',
                            wins: '6',
                            Driver: {
                                driverId: 'clark',
                                url: 'http://en.wikipedia.org/wiki/Jim_Clark',
                                givenName: 'Jim',
                                familyName: 'Clark',
                                dateOfBirth: '1936-03-04',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'lotus-climax',
                                    url: 'http://en.wikipedia.org/wiki/Team_Lotus',
                                    name: 'Lotus-Climax',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1966',
                    round: '9',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '42',
                            wins: '4',
                            Driver: {
                                driverId: 'jack_brabham',
                                url: 'http://en.wikipedia.org/wiki/Jack_Brabham',
                                givenName: 'Jack',
                                familyName: 'Brabham',
                                dateOfBirth: '1926-04-02',
                                nationality: 'Australian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'brabham-repco',
                                    url: 'http://en.wikipedia.org/wiki/Brabham',
                                    name: 'Brabham-Repco',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1967',
                    round: '11',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '51',
                            wins: '2',
                            Driver: {
                                driverId: 'hulme',
                                url: 'http://en.wikipedia.org/wiki/Denny_Hulme',
                                givenName: 'Denny',
                                familyName: 'Hulme',
                                dateOfBirth: '1936-06-18',
                                nationality: 'New Zealander'
                            },
                            Constructors: [
                                {
                                    constructorId: 'brabham-repco',
                                    url: 'http://en.wikipedia.org/wiki/Brabham',
                                    name: 'Brabham-Repco',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1968',
                    round: '12',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '48',
                            wins: '3',
                            Driver: {
                                driverId: 'hill',
                                url: 'http://en.wikipedia.org/wiki/Graham_Hill',
                                givenName: 'Graham',
                                familyName: 'Hill',
                                dateOfBirth: '1929-02-15',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'lotus-ford',
                                    url: 'http://en.wikipedia.org/wiki/Team_Lotus',
                                    name: 'Lotus-Ford',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1969',
                    round: '11',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '63',
                            wins: '6',
                            Driver: {
                                driverId: 'stewart',
                                url: 'http://en.wikipedia.org/wiki/Jackie_Stewart',
                                givenName: 'Jackie',
                                familyName: 'Stewart',
                                dateOfBirth: '1939-06-11',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'matra-ford',
                                    url: 'http://en.wikipedia.org/wiki/Matra',
                                    name: 'Matra-Ford',
                                    nationality: 'French'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1970',
                    round: '13',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '45',
                            wins: '5',
                            Driver: {
                                driverId: 'rindt',
                                url: 'http://en.wikipedia.org/wiki/Jochen_Rindt',
                                givenName: 'Jochen',
                                familyName: 'Rindt',
                                dateOfBirth: '1942-04-18',
                                nationality: 'Austrian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'team_lotus',
                                    url: 'http://en.wikipedia.org/wiki/Team_Lotus',
                                    name: 'Team Lotus',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1971',
                    round: '11',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '62',
                            wins: '6',
                            Driver: {
                                driverId: 'stewart',
                                url: 'http://en.wikipedia.org/wiki/Jackie_Stewart',
                                givenName: 'Jackie',
                                familyName: 'Stewart',
                                dateOfBirth: '1939-06-11',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'tyrrell',
                                    url: 'http://en.wikipedia.org/wiki/Tyrrell_Racing',
                                    name: 'Tyrrell',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1972',
                    round: '12',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '61',
                            wins: '5',
                            Driver: {
                                driverId: 'emerson_fittipaldi',
                                url: 'http://en.wikipedia.org/wiki/Emerson_Fittipaldi',
                                givenName: 'Emerson',
                                familyName: 'Fittipaldi',
                                dateOfBirth: '1946-12-12',
                                nationality: 'Brazilian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'team_lotus',
                                    url: 'http://en.wikipedia.org/wiki/Team_Lotus',
                                    name: 'Team Lotus',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1973',
                    round: '15',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '71',
                            wins: '5',
                            Driver: {
                                driverId: 'stewart',
                                url: 'http://en.wikipedia.org/wiki/Jackie_Stewart',
                                givenName: 'Jackie',
                                familyName: 'Stewart',
                                dateOfBirth: '1939-06-11',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'tyrrell',
                                    url: 'http://en.wikipedia.org/wiki/Tyrrell_Racing',
                                    name: 'Tyrrell',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1974',
                    round: '15',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '55',
                            wins: '3',
                            Driver: {
                                driverId: 'emerson_fittipaldi',
                                url: 'http://en.wikipedia.org/wiki/Emerson_Fittipaldi',
                                givenName: 'Emerson',
                                familyName: 'Fittipaldi',
                                dateOfBirth: '1946-12-12',
                                nationality: 'Brazilian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1975',
                    round: '14',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '64.5',
                            wins: '5',
                            Driver: {
                                driverId: 'lauda',
                                url: 'http://en.wikipedia.org/wiki/Niki_Lauda',
                                givenName: 'Niki',
                                familyName: 'Lauda',
                                dateOfBirth: '1949-02-22',
                                nationality: 'Austrian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1976',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '69',
                            wins: '6',
                            Driver: {
                                driverId: 'hunt',
                                url: 'http://en.wikipedia.org/wiki/James_Hunt',
                                givenName: 'James',
                                familyName: 'Hunt',
                                dateOfBirth: '1947-08-29',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1977',
                    round: '17',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '72',
                            wins: '3',
                            Driver: {
                                driverId: 'lauda',
                                url: 'http://en.wikipedia.org/wiki/Niki_Lauda',
                                givenName: 'Niki',
                                familyName: 'Lauda',
                                dateOfBirth: '1949-02-22',
                                nationality: 'Austrian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1978',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '64',
                            wins: '6',
                            Driver: {
                                driverId: 'mario_andretti',
                                url: 'http://en.wikipedia.org/wiki/Mario_Andretti',
                                givenName: 'Mario',
                                familyName: 'Andretti',
                                dateOfBirth: '1940-02-28',
                                nationality: 'American'
                            },
                            Constructors: [
                                {
                                    constructorId: 'team_lotus',
                                    url: 'http://en.wikipedia.org/wiki/Team_Lotus',
                                    name: 'Team Lotus',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1979',
                    round: '15',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '51',
                            wins: '3',
                            Driver: {
                                driverId: 'scheckter',
                                url: 'http://en.wikipedia.org/wiki/Jody_Scheckter',
                                givenName: 'Jody',
                                familyName: 'Scheckter',
                                dateOfBirth: '1950-01-29',
                                nationality: 'South African'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1980',
                    round: '14',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '67',
                            wins: '5',
                            Driver: {
                                driverId: 'jones',
                                url: 'http://en.wikipedia.org/wiki/Alan_Jones_(Formula_1)',
                                givenName: 'Alan',
                                familyName: 'Jones',
                                dateOfBirth: '1946-11-02',
                                nationality: 'Australian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'williams',
                                    url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                                    name: 'Williams',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1981',
                    round: '15',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '50',
                            wins: '3',
                            Driver: {
                                driverId: 'piquet',
                                url: 'http://en.wikipedia.org/wiki/Nelson_Piquet',
                                givenName: 'Nelson',
                                familyName: 'Piquet',
                                dateOfBirth: '1952-08-17',
                                nationality: 'Brazilian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'brabham',
                                    url: 'http://en.wikipedia.org/wiki/Brabham',
                                    name: 'Brabham',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1982',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '44',
                            wins: '1',
                            Driver: {
                                driverId: 'keke_rosberg',
                                url: 'http://en.wikipedia.org/wiki/Keke_Rosberg',
                                givenName: 'Keke',
                                familyName: 'Rosberg',
                                dateOfBirth: '1948-12-06',
                                nationality: 'Finnish'
                            },
                            Constructors: [
                                {
                                    constructorId: 'williams',
                                    url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                                    name: 'Williams',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1983',
                    round: '15',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '59',
                            wins: '3',
                            Driver: {
                                driverId: 'piquet',
                                url: 'http://en.wikipedia.org/wiki/Nelson_Piquet',
                                givenName: 'Nelson',
                                familyName: 'Piquet',
                                dateOfBirth: '1952-08-17',
                                nationality: 'Brazilian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'brabham',
                                    url: 'http://en.wikipedia.org/wiki/Brabham',
                                    name: 'Brabham',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1984',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '72',
                            wins: '5',
                            Driver: {
                                driverId: 'lauda',
                                url: 'http://en.wikipedia.org/wiki/Niki_Lauda',
                                givenName: 'Niki',
                                familyName: 'Lauda',
                                dateOfBirth: '1949-02-22',
                                nationality: 'Austrian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1985',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '73',
                            wins: '5',
                            Driver: {
                                driverId: 'prost',
                                url: 'http://en.wikipedia.org/wiki/Alain_Prost',
                                givenName: 'Alain',
                                familyName: 'Prost',
                                dateOfBirth: '1955-02-24',
                                nationality: 'French'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1986',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '72',
                            wins: '4',
                            Driver: {
                                driverId: 'prost',
                                url: 'http://en.wikipedia.org/wiki/Alain_Prost',
                                givenName: 'Alain',
                                familyName: 'Prost',
                                dateOfBirth: '1955-02-24',
                                nationality: 'French'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1987',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '73',
                            wins: '3',
                            Driver: {
                                driverId: 'piquet',
                                url: 'http://en.wikipedia.org/wiki/Nelson_Piquet',
                                givenName: 'Nelson',
                                familyName: 'Piquet',
                                dateOfBirth: '1952-08-17',
                                nationality: 'Brazilian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'williams',
                                    url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                                    name: 'Williams',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1988',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '90',
                            wins: '8',
                            Driver: {
                                driverId: 'senna',
                                url: 'http://en.wikipedia.org/wiki/Ayrton_Senna',
                                givenName: 'Ayrton',
                                familyName: 'Senna',
                                dateOfBirth: '1960-03-21',
                                nationality: 'Brazilian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1989',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '76',
                            wins: '4',
                            Driver: {
                                driverId: 'prost',
                                url: 'http://en.wikipedia.org/wiki/Alain_Prost',
                                givenName: 'Alain',
                                familyName: 'Prost',
                                dateOfBirth: '1955-02-24',
                                nationality: 'French'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1990',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '78',
                            wins: '6',
                            Driver: {
                                driverId: 'senna',
                                url: 'http://en.wikipedia.org/wiki/Ayrton_Senna',
                                givenName: 'Ayrton',
                                familyName: 'Senna',
                                dateOfBirth: '1960-03-21',
                                nationality: 'Brazilian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1991',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '96',
                            wins: '7',
                            Driver: {
                                driverId: 'senna',
                                url: 'http://en.wikipedia.org/wiki/Ayrton_Senna',
                                givenName: 'Ayrton',
                                familyName: 'Senna',
                                dateOfBirth: '1960-03-21',
                                nationality: 'Brazilian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1992',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '108',
                            wins: '9',
                            Driver: {
                                driverId: 'mansell',
                                url: 'http://en.wikipedia.org/wiki/Nigel_Mansell',
                                givenName: 'Nigel',
                                familyName: 'Mansell',
                                dateOfBirth: '1953-08-08',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'williams',
                                    url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                                    name: 'Williams',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1993',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '99',
                            wins: '7',
                            Driver: {
                                driverId: 'prost',
                                url: 'http://en.wikipedia.org/wiki/Alain_Prost',
                                givenName: 'Alain',
                                familyName: 'Prost',
                                dateOfBirth: '1955-02-24',
                                nationality: 'French'
                            },
                            Constructors: [
                                {
                                    constructorId: 'williams',
                                    url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                                    name: 'Williams',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1994',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '92',
                            wins: '8',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'benetton',
                                    url: 'http://en.wikipedia.org/wiki/Benetton_Formula',
                                    name: 'Benetton',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1995',
                    round: '17',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '102',
                            wins: '9',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'benetton',
                                    url: 'http://en.wikipedia.org/wiki/Benetton_Formula',
                                    name: 'Benetton',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1996',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '97',
                            wins: '8',
                            Driver: {
                                driverId: 'damon_hill',
                                url: 'http://en.wikipedia.org/wiki/Damon_Hill',
                                givenName: 'Damon',
                                familyName: 'Hill',
                                dateOfBirth: '1960-09-17',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'williams',
                                    url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                                    name: 'Williams',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1997',
                    round: '17',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '81',
                            wins: '7',
                            Driver: {
                                driverId: 'villeneuve',
                                code: 'VIL',
                                url: 'http://en.wikipedia.org/wiki/Jacques_Villeneuve',
                                givenName: 'Jacques',
                                familyName: 'Villeneuve',
                                dateOfBirth: '1971-04-09',
                                nationality: 'Canadian'
                            },
                            Constructors: [
                                {
                                    constructorId: 'williams',
                                    url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                                    name: 'Williams',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1998',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '100',
                            wins: '8',
                            Driver: {
                                driverId: 'hakkinen',
                                url: 'http://en.wikipedia.org/wiki/Mika_H%C3%A4kkinen',
                                givenName: 'Mika',
                                familyName: 'Häkkinen',
                                dateOfBirth: '1968-09-28',
                                nationality: 'Finnish'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '1999',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '76',
                            wins: '5',
                            Driver: {
                                driverId: 'hakkinen',
                                url: 'http://en.wikipedia.org/wiki/Mika_H%C3%A4kkinen',
                                givenName: 'Mika',
                                familyName: 'Häkkinen',
                                dateOfBirth: '1968-09-28',
                                nationality: 'Finnish'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2000',
                    round: '17',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '108',
                            wins: '9',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2001',
                    round: '17',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '123',
                            wins: '9',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2002',
                    round: '17',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '144',
                            wins: '11',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2003',
                    round: '16',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '93',
                            wins: '6',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2004',
                    round: '18',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '148',
                            wins: '13',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2005',
                    round: '19',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '133',
                            wins: '7',
                            Driver: {
                                driverId: 'alonso',
                                permanentNumber: '14',
                                code: 'ALO',
                                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                                givenName: 'Fernando',
                                familyName: 'Alonso',
                                dateOfBirth: '1981-07-29',
                                nationality: 'Spanish'
                            },
                            Constructors: [
                                {
                                    constructorId: 'renault',
                                    url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                                    name: 'Renault',
                                    nationality: 'French'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '18',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '134',
                            wins: '7',
                            Driver: {
                                driverId: 'alonso',
                                permanentNumber: '14',
                                code: 'ALO',
                                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                                givenName: 'Fernando',
                                familyName: 'Alonso',
                                dateOfBirth: '1981-07-29',
                                nationality: 'Spanish'
                            },
                            Constructors: [
                                {
                                    constructorId: 'renault',
                                    url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                                    name: 'Renault',
                                    nationality: 'French'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2007',
                    round: '17',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '110',
                            wins: '6',
                            Driver: {
                                driverId: 'raikkonen',
                                permanentNumber: '7',
                                code: 'RAI',
                                url: 'http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen',
                                givenName: 'Kimi',
                                familyName: 'Räikkönen',
                                dateOfBirth: '1979-10-17',
                                nationality: 'Finnish'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2008',
                    round: '18',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '98',
                            wins: '5',
                            Driver: {
                                driverId: 'hamilton',
                                permanentNumber: '44',
                                code: 'HAM',
                                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                                givenName: 'Lewis',
                                familyName: 'Hamilton',
                                dateOfBirth: '1985-01-07',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2009',
                    round: '17',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '95',
                            wins: '6',
                            Driver: {
                                driverId: 'button',
                                permanentNumber: '22',
                                code: 'BUT',
                                url: 'http://en.wikipedia.org/wiki/Jenson_Button',
                                givenName: 'Jenson',
                                familyName: 'Button',
                                dateOfBirth: '1980-01-19',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'brawn',
                                    url: 'http://en.wikipedia.org/wiki/Brawn_GP',
                                    name: 'Brawn',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2010',
                    round: '19',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '256',
                            wins: '5',
                            Driver: {
                                driverId: 'vettel',
                                permanentNumber: '5',
                                code: 'VET',
                                url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                                givenName: 'Sebastian',
                                familyName: 'Vettel',
                                dateOfBirth: '1987-07-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'red_bull',
                                    url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                                    name: 'Red Bull',
                                    nationality: 'Austrian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2011',
                    round: '19',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '392',
                            wins: '11',
                            Driver: {
                                driverId: 'vettel',
                                permanentNumber: '5',
                                code: 'VET',
                                url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                                givenName: 'Sebastian',
                                familyName: 'Vettel',
                                dateOfBirth: '1987-07-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'red_bull',
                                    url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                                    name: 'Red Bull',
                                    nationality: 'Austrian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2012',
                    round: '20',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '281',
                            wins: '5',
                            Driver: {
                                driverId: 'vettel',
                                permanentNumber: '5',
                                code: 'VET',
                                url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                                givenName: 'Sebastian',
                                familyName: 'Vettel',
                                dateOfBirth: '1987-07-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'red_bull',
                                    url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                                    name: 'Red Bull',
                                    nationality: 'Austrian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2013',
                    round: '19',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '397',
                            wins: '13',
                            Driver: {
                                driverId: 'vettel',
                                permanentNumber: '5',
                                code: 'VET',
                                url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                                givenName: 'Sebastian',
                                familyName: 'Vettel',
                                dateOfBirth: '1987-07-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'red_bull',
                                    url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                                    name: 'Red Bull',
                                    nationality: 'Austrian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2014',
                    round: '19',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '384',
                            wins: '11',
                            Driver: {
                                driverId: 'hamilton',
                                permanentNumber: '44',
                                code: 'HAM',
                                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                                givenName: 'Lewis',
                                familyName: 'Hamilton',
                                dateOfBirth: '1985-01-07',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mercedes',
                                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                                    name: 'Mercedes',
                                    nationality: 'German'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2015',
                    round: '19',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '381',
                            wins: '10',
                            Driver: {
                                driverId: 'hamilton',
                                permanentNumber: '44',
                                code: 'HAM',
                                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                                givenName: 'Lewis',
                                familyName: 'Hamilton',
                                dateOfBirth: '1985-01-07',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mercedes',
                                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                                    name: 'Mercedes',
                                    nationality: 'German'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2016',
                    round: '21',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '385',
                            wins: '9',
                            Driver: {
                                driverId: 'rosberg',
                                permanentNumber: '6',
                                code: 'ROS',
                                url: 'http://en.wikipedia.org/wiki/Nico_Rosberg',
                                givenName: 'Nico',
                                familyName: 'Rosberg',
                                dateOfBirth: '1985-06-27',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mercedes',
                                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                                    name: 'Mercedes',
                                    nationality: 'German'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2017',
                    round: '20',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '363',
                            wins: '9',
                            Driver: {
                                driverId: 'hamilton',
                                permanentNumber: '44',
                                code: 'HAM',
                                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                                givenName: 'Lewis',
                                familyName: 'Hamilton',
                                dateOfBirth: '1985-01-07',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mercedes',
                                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                                    name: 'Mercedes',
                                    nationality: 'German'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2018',
                    round: '21',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '408',
                            wins: '11',
                            Driver: {
                                driverId: 'hamilton',
                                permanentNumber: '44',
                                code: 'HAM',
                                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                                givenName: 'Lewis',
                                familyName: 'Hamilton',
                                dateOfBirth: '1985-01-07',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mercedes',
                                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                                    name: 'Mercedes',
                                    nationality: 'German'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2019',
                    round: '21',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '413',
                            wins: '11',
                            Driver: {
                                driverId: 'hamilton',
                                permanentNumber: '44',
                                code: 'HAM',
                                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                                givenName: 'Lewis',
                                familyName: 'Hamilton',
                                dateOfBirth: '1985-01-07',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mercedes',
                                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                                    name: 'Mercedes',
                                    nationality: 'German'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
};

export const standingsFrom2005To2015: ErgastResponse<StandingsMRData> = <ErgastResponse<StandingsMRData>> {
    MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        url: 'http://ergast.com/api/f1/driverstandings/1.json',
        limit: '100',
        offset: '0',
        total: '11',
        StandingsTable: {
            driverStandings: '1',
            StandingsLists: [
                {
                    season: '2005',
                    round: '19',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '133',
                            wins: '7',
                            Driver: {
                                driverId: 'alonso',
                                permanentNumber: '14',
                                code: 'ALO',
                                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                                givenName: 'Fernando',
                                familyName: 'Alonso',
                                dateOfBirth: '1981-07-29',
                                nationality: 'Spanish'
                            },
                            Constructors: [
                                {
                                    constructorId: 'renault',
                                    url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                                    name: 'Renault',
                                    nationality: 'French'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '18',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '134',
                            wins: '7',
                            Driver: {
                                driverId: 'alonso',
                                permanentNumber: '14',
                                code: 'ALO',
                                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                                givenName: 'Fernando',
                                familyName: 'Alonso',
                                dateOfBirth: '1981-07-29',
                                nationality: 'Spanish'
                            },
                            Constructors: [
                                {
                                    constructorId: 'renault',
                                    url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                                    name: 'Renault',
                                    nationality: 'French'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2007',
                    round: '17',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '110',
                            wins: '6',
                            Driver: {
                                driverId: 'raikkonen',
                                permanentNumber: '7',
                                code: 'RAI',
                                url: 'http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen',
                                givenName: 'Kimi',
                                familyName: 'Räikkönen',
                                dateOfBirth: '1979-10-17',
                                nationality: 'Finnish'
                            },
                            Constructors: [
                                {
                                    constructorId: 'ferrari',
                                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                    name: 'Ferrari',
                                    nationality: 'Italian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2008',
                    round: '18',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '98',
                            wins: '5',
                            Driver: {
                                driverId: 'hamilton',
                                permanentNumber: '44',
                                code: 'HAM',
                                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                                givenName: 'Lewis',
                                familyName: 'Hamilton',
                                dateOfBirth: '1985-01-07',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mclaren',
                                    url: 'http://en.wikipedia.org/wiki/McLaren',
                                    name: 'McLaren',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2009',
                    round: '17',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '95',
                            wins: '6',
                            Driver: {
                                driverId: 'button',
                                permanentNumber: '22',
                                code: 'BUT',
                                url: 'http://en.wikipedia.org/wiki/Jenson_Button',
                                givenName: 'Jenson',
                                familyName: 'Button',
                                dateOfBirth: '1980-01-19',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'brawn',
                                    url: 'http://en.wikipedia.org/wiki/Brawn_GP',
                                    name: 'Brawn',
                                    nationality: 'British'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2010',
                    round: '19',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '256',
                            wins: '5',
                            Driver: {
                                driverId: 'vettel',
                                permanentNumber: '5',
                                code: 'VET',
                                url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                                givenName: 'Sebastian',
                                familyName: 'Vettel',
                                dateOfBirth: '1987-07-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'red_bull',
                                    url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                                    name: 'Red Bull',
                                    nationality: 'Austrian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2011',
                    round: '19',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '392',
                            wins: '11',
                            Driver: {
                                driverId: 'vettel',
                                permanentNumber: '5',
                                code: 'VET',
                                url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                                givenName: 'Sebastian',
                                familyName: 'Vettel',
                                dateOfBirth: '1987-07-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'red_bull',
                                    url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                                    name: 'Red Bull',
                                    nationality: 'Austrian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2012',
                    round: '20',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '281',
                            wins: '5',
                            Driver: {
                                driverId: 'vettel',
                                permanentNumber: '5',
                                code: 'VET',
                                url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                                givenName: 'Sebastian',
                                familyName: 'Vettel',
                                dateOfBirth: '1987-07-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'red_bull',
                                    url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                                    name: 'Red Bull',
                                    nationality: 'Austrian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2013',
                    round: '19',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '397',
                            wins: '13',
                            Driver: {
                                driverId: 'vettel',
                                permanentNumber: '5',
                                code: 'VET',
                                url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                                givenName: 'Sebastian',
                                familyName: 'Vettel',
                                dateOfBirth: '1987-07-03',
                                nationality: 'German'
                            },
                            Constructors: [
                                {
                                    constructorId: 'red_bull',
                                    url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                                    name: 'Red Bull',
                                    nationality: 'Austrian'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2014',
                    round: '19',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '384',
                            wins: '11',
                            Driver: {
                                driverId: 'hamilton',
                                permanentNumber: '44',
                                code: 'HAM',
                                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                                givenName: 'Lewis',
                                familyName: 'Hamilton',
                                dateOfBirth: '1985-01-07',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mercedes',
                                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                                    name: 'Mercedes',
                                    nationality: 'German'
                                }
                            ]
                        }
                    ]
                },
                {
                    season: '2015',
                    round: '19',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '381',
                            wins: '10',
                            Driver: {
                                driverId: 'hamilton',
                                permanentNumber: '44',
                                code: 'HAM',
                                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                                givenName: 'Lewis',
                                familyName: 'Hamilton',
                                dateOfBirth: '1985-01-07',
                                nationality: 'British'
                            },
                            Constructors: [
                                {
                                    constructorId: 'mercedes',
                                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                                    name: 'Mercedes',
                                    nationality: 'German'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
};

export const standingsFor2006: ErgastResponse<StandingsMRData> = <ErgastResponse<StandingsMRData>> {
    MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        url: 'http://ergast.com/api/f1/2006/driverstandings/1.json',
        limit: '30',
        offset: '0',
        total: '1',
        StandingsTable: {
            season: '2006',
            driverStandings: '1',
            StandingsLists: [
                {
                    season: '2006',
                    round: '18',
                    DriverStandings: [
                        {
                            position: '1',
                            positionText: '1',
                            points: '134',
                            wins: '7',
                            Driver: {
                                driverId: 'alonso',
                                permanentNumber: '14',
                                code: 'ALO',
                                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                                givenName: 'Fernando',
                                familyName: 'Alonso',
                                dateOfBirth: '1981-07-29',
                                nationality: 'Spanish'
                            },
                            Constructors: [
                                {
                                    constructorId: 'renault',
                                    url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                                    name: 'Renault',
                                    nationality: 'French'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
};

export const resultsFor2006: ErgastResponse<RaceMRData> = <ErgastResponse<RaceMRData>> {
    MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        url: 'http://ergast.com/api/f1/2006/results/1.json',
        limit: '30',
        offset: '0',
        total: '18',
        RaceTable: {
            season: '2006',
            position: '1',
            Races: [
                {
                    season: '2006',
                    round: '1',
                    url: 'http://en.wikipedia.org/wiki/2006_Bahrain_Grand_Prix',
                    raceName: 'Bahrain Grand Prix',
                    Circuit: {
                        circuitId: 'bahrain',
                        url: 'http://en.wikipedia.org/wiki/Bahrain_International_Circuit',
                        circuitName: 'Bahrain International Circuit',
                        Location: {
                            lat: '26.0325',
                            long: '50.5106',
                            locality: 'Sakhir',
                            country: 'Bahrain'
                        }
                    },
                    date: '2006-03-12',
                    time: '14:30:00Z',
                    Results: [
                        {
                            number: '1',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'alonso',
                                permanentNumber: '14',
                                code: 'ALO',
                                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                                givenName: 'Fernando',
                                familyName: 'Alonso',
                                dateOfBirth: '1981-07-29',
                                nationality: 'Spanish'
                            },
                            Constructor: {
                                constructorId: 'renault',
                                url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                                name: 'Renault',
                                nationality: 'French'
                            },
                            grid: '4',
                            laps: '57',
                            status: 'Finished',
                            Time: {
                                millis: '5386205',
                                time: '1:29:46.205'
                            },
                            FastestLap: {
                                rank: '3',
                                lap: '21',
                                Time: {
                                    time: '1:32.534'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '210.551'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '2',
                    url: 'http://en.wikipedia.org/wiki/2006_Malaysian_Grand_Prix',
                    raceName: 'Malaysian Grand Prix',
                    Circuit: {
                        circuitId: 'sepang',
                        url: 'http://en.wikipedia.org/wiki/Sepang_International_Circuit',
                        circuitName: 'Sepang International Circuit',
                        Location: {
                            lat: '2.76083',
                            long: '101.738',
                            locality: 'Kuala Lumpur',
                            country: 'Malaysia'
                        }
                    },
                    date: '2006-03-19',
                    time: '15:00:00Z',
                    Results: [
                        {
                            number: '2',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'fisichella',
                                code: 'FIS',
                                url: 'http://en.wikipedia.org/wiki/Giancarlo_Fisichella',
                                givenName: 'Giancarlo',
                                familyName: 'Fisichella',
                                dateOfBirth: '1973-01-14',
                                nationality: 'Italian'
                            },
                            Constructor: {
                                constructorId: 'renault',
                                url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                                name: 'Renault',
                                nationality: 'French'
                            },
                            grid: '1',
                            laps: '56',
                            status: 'Finished',
                            Time: {
                                millis: '5440529',
                                time: '1:30:40.529'
                            },
                            FastestLap: {
                                rank: '2',
                                lap: '16',
                                Time: {
                                    time: '1:35.294'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '209.402'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '3',
                    url: 'http://en.wikipedia.org/wiki/2006_Australian_Grand_Prix',
                    raceName: 'Australian Grand Prix',
                    Circuit: {
                        circuitId: 'albert_park',
                        url: 'http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit',
                        circuitName: 'Albert Park Grand Prix Circuit',
                        Location: {
                            lat: '-37.8497',
                            long: '144.968',
                            locality: 'Melbourne',
                            country: 'Australia'
                        }
                    },
                    date: '2006-04-02',
                    time: '14:00:00Z',
                    Results: [
                        {
                            number: '1',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'alonso',
                                permanentNumber: '14',
                                code: 'ALO',
                                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                                givenName: 'Fernando',
                                familyName: 'Alonso',
                                dateOfBirth: '1981-07-29',
                                nationality: 'Spanish'
                            },
                            Constructor: {
                                constructorId: 'renault',
                                url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                                name: 'Renault',
                                nationality: 'French'
                            },
                            grid: '3',
                            laps: '57',
                            status: 'Finished',
                            Time: {
                                millis: '5667870',
                                time: '1:34:27.870'
                            },
                            FastestLap: {
                                rank: '2',
                                lap: '49',
                                Time: {
                                    time: '1:26.189'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '221.499'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '4',
                    url: 'http://en.wikipedia.org/wiki/2006_San_Marino_Grand_Prix',
                    raceName: 'San Marino Grand Prix',
                    Circuit: {
                        circuitId: 'imola',
                        url: 'http://en.wikipedia.org/wiki/Autodromo_Enzo_e_Dino_Ferrari',
                        circuitName: 'Autodromo Enzo e Dino Ferrari',
                        Location: {
                            lat: '44.3439',
                            long: '11.7167',
                            locality: 'Imola',
                            country: 'Italy'
                        }
                    },
                    date: '2006-04-23',
                    time: '14:00:00Z',
                    Results: [
                        {
                            number: '5',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructor: {
                                constructorId: 'ferrari',
                                url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                name: 'Ferrari',
                                nationality: 'Italian'
                            },
                            grid: '1',
                            laps: '62',
                            status: 'Finished',
                            Time: {
                                millis: '5466486',
                                time: '1:31:06.486'
                            },
                            FastestLap: {
                                rank: '2',
                                lap: '19',
                                Time: {
                                    time: '1:24.624'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '210.961'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '5',
                    url: 'http://en.wikipedia.org/wiki/2006_European_Grand_Prix',
                    raceName: 'European Grand Prix',
                    Circuit: {
                        circuitId: 'nurburgring',
                        url: 'http://en.wikipedia.org/wiki/N%C3%BCrburgring',
                        circuitName: 'Nürburgring',
                        Location: {
                            lat: '50.3356',
                            long: '6.9475',
                            locality: 'Nürburg',
                            country: 'Germany'
                        }
                    },
                    date: '2006-05-07',
                    time: '14:00:00Z',
                    Results: [
                        {
                            number: '5',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructor: {
                                constructorId: 'ferrari',
                                url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                name: 'Ferrari',
                                nationality: 'Italian'
                            },
                            grid: '2',
                            laps: '60',
                            status: 'Finished',
                            Time: {
                                millis: '5758765',
                                time: '1:35:58.765'
                            },
                            FastestLap: {
                                rank: '1',
                                lap: '39',
                                Time: {
                                    time: '1:32.099'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '201.226'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '6',
                    url: 'http://en.wikipedia.org/wiki/2006_Spanish_Grand_Prix',
                    raceName: 'Spanish Grand Prix',
                    Circuit: {
                        circuitId: 'catalunya',
                        url: 'http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya',
                        circuitName: 'Circuit de Barcelona-Catalunya',
                        Location: {
                            lat: '41.57',
                            long: '2.26111',
                            locality: 'Montmeló',
                            country: 'Spain'
                        }
                    },
                    date: '2006-05-14',
                    time: '14:00:00Z',
                    Results: [
                        {
                            number: '1',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'alonso',
                                permanentNumber: '14',
                                code: 'ALO',
                                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                                givenName: 'Fernando',
                                familyName: 'Alonso',
                                dateOfBirth: '1981-07-29',
                                nationality: 'Spanish'
                            },
                            Constructor: {
                                constructorId: 'renault',
                                url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                                name: 'Renault',
                                nationality: 'French'
                            },
                            grid: '1',
                            laps: '66',
                            status: 'Finished',
                            Time: {
                                millis: '5181759',
                                time: '1:26:21.759'
                            },
                            FastestLap: {
                                rank: '2',
                                lap: '39',
                                Time: {
                                    time: '1:16.723'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '217.108'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '7',
                    url: 'http://en.wikipedia.org/wiki/2006_Monaco_Grand_Prix',
                    raceName: 'Monaco Grand Prix',
                    Circuit: {
                        circuitId: 'monaco',
                        url: 'http://en.wikipedia.org/wiki/Circuit_de_Monaco',
                        circuitName: 'Circuit de Monaco',
                        Location: {
                            lat: '43.7347',
                            long: '7.42056',
                            locality: 'Monte-Carlo',
                            country: 'Monaco'
                        }
                    },
                    date: '2006-05-28',
                    time: '14:00:00Z',
                    Results: [
                        {
                            number: '1',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'alonso',
                                permanentNumber: '14',
                                code: 'ALO',
                                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                                givenName: 'Fernando',
                                familyName: 'Alonso',
                                dateOfBirth: '1981-07-29',
                                nationality: 'Spanish'
                            },
                            Constructor: {
                                constructorId: 'renault',
                                url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                                name: 'Renault',
                                nationality: 'French'
                            },
                            grid: '1',
                            laps: '78',
                            status: 'Finished',
                            Time: {
                                millis: '6223116',
                                time: '1:43:43.116'
                            },
                            FastestLap: {
                                rank: '3',
                                lap: '11',
                                Time: {
                                    time: '1:15.671'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '158.898'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '8',
                    url: 'http://en.wikipedia.org/wiki/2006_British_Grand_Prix',
                    raceName: 'British Grand Prix',
                    Circuit: {
                        circuitId: 'silverstone',
                        url: 'http://en.wikipedia.org/wiki/Silverstone_Circuit',
                        circuitName: 'Silverstone Circuit',
                        Location: {
                            lat: '52.0786',
                            long: '-1.01694',
                            locality: 'Silverstone',
                            country: 'UK'
                        }
                    },
                    date: '2006-06-11',
                    time: '12:00:00Z',
                    Results: [
                        {
                            number: '1',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'alonso',
                                permanentNumber: '14',
                                code: 'ALO',
                                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                                givenName: 'Fernando',
                                familyName: 'Alonso',
                                dateOfBirth: '1981-07-29',
                                nationality: 'Spanish'
                            },
                            Constructor: {
                                constructorId: 'renault',
                                url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                                name: 'Renault',
                                nationality: 'French'
                            },
                            grid: '1',
                            laps: '60',
                            status: 'Finished',
                            Time: {
                                millis: '5151927',
                                time: '1:25:51.927'
                            },
                            FastestLap: {
                                rank: '1',
                                lap: '21',
                                Time: {
                                    time: '1:21.599'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '226.811'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '9',
                    url: 'http://en.wikipedia.org/wiki/2006_Canadian_Grand_Prix',
                    raceName: 'Canadian Grand Prix',
                    Circuit: {
                        circuitId: 'villeneuve',
                        url: 'http://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve',
                        circuitName: 'Circuit Gilles Villeneuve',
                        Location: {
                            lat: '45.5',
                            long: '-73.5228',
                            locality: 'Montreal',
                            country: 'Canada'
                        }
                    },
                    date: '2006-06-25',
                    time: '13:00:00Z',
                    Results: [
                        {
                            number: '1',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'alonso',
                                permanentNumber: '14',
                                code: 'ALO',
                                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                                givenName: 'Fernando',
                                familyName: 'Alonso',
                                dateOfBirth: '1981-07-29',
                                nationality: 'Spanish'
                            },
                            Constructor: {
                                constructorId: 'renault',
                                url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                                name: 'Renault',
                                nationality: 'French'
                            },
                            grid: '1',
                            laps: '70',
                            status: 'Finished',
                            Time: {
                                millis: '5677308',
                                time: '1:34:37.308'
                            },
                            FastestLap: {
                                rank: '2',
                                lap: '22',
                                Time: {
                                    time: '1:15.911'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '206.815'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '10',
                    url: 'http://en.wikipedia.org/wiki/2006_United_States_Grand_Prix',
                    raceName: 'United States Grand Prix',
                    Circuit: {
                        circuitId: 'indianapolis',
                        url: 'http://en.wikipedia.org/wiki/Indianapolis_Motor_Speedway',
                        circuitName: 'Indianapolis Motor Speedway',
                        Location: {
                            lat: '39.795',
                            long: '-86.2347',
                            locality: 'Indianapolis',
                            country: 'USA'
                        }
                    },
                    date: '2006-07-02',
                    time: '14:00:00Z',
                    Results: [
                        {
                            number: '5',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructor: {
                                constructorId: 'ferrari',
                                url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                name: 'Ferrari',
                                nationality: 'Italian'
                            },
                            grid: '1',
                            laps: '73',
                            status: 'Finished',
                            Time: {
                                millis: '5675199',
                                time: '1:34:35.199'
                            },
                            FastestLap: {
                                rank: '1',
                                lap: '56',
                                Time: {
                                    time: '1:12.719'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '207.527'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '11',
                    url: 'http://en.wikipedia.org/wiki/2006_French_Grand_Prix',
                    raceName: 'French Grand Prix',
                    Circuit: {
                        circuitId: 'magny_cours',
                        url: 'http://en.wikipedia.org/wiki/Circuit_de_Nevers_Magny-Cours',
                        circuitName: 'Circuit de Nevers Magny-Cours',
                        Location: {
                            lat: '46.8642',
                            long: '3.16361',
                            locality: 'Magny Cours',
                            country: 'France'
                        }
                    },
                    date: '2006-07-16',
                    time: '14:00:00Z',
                    Results: [
                        {
                            number: '5',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructor: {
                                constructorId: 'ferrari',
                                url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                name: 'Ferrari',
                                nationality: 'Italian'
                            },
                            grid: '1',
                            laps: '70',
                            status: 'Finished',
                            Time: {
                                millis: '5527803',
                                time: '1:32:07.803'
                            },
                            FastestLap: {
                                rank: '1',
                                lap: '46',
                                Time: {
                                    time: '1:17.111'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '205.931'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '12',
                    url: 'http://en.wikipedia.org/wiki/2006_German_Grand_Prix',
                    raceName: 'German Grand Prix',
                    Circuit: {
                        circuitId: 'hockenheimring',
                        url: 'http://en.wikipedia.org/wiki/Hockenheimring',
                        circuitName: 'Hockenheimring',
                        Location: {
                            lat: '49.3278',
                            long: '8.56583',
                            locality: 'Hockenheim',
                            country: 'Germany'
                        }
                    },
                    date: '2006-07-30',
                    time: '14:00:00Z',
                    Results: [
                        {
                            number: '5',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructor: {
                                constructorId: 'ferrari',
                                url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                name: 'Ferrari',
                                nationality: 'Italian'
                            },
                            grid: '2',
                            laps: '67',
                            status: 'Finished',
                            Time: {
                                millis: '5271693',
                                time: '1:27:51.693'
                            },
                            FastestLap: {
                                rank: '1',
                                lap: '17',
                                Time: {
                                    time: '1:16.357'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '215.650'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '13',
                    url: 'http://en.wikipedia.org/wiki/2006_Hungarian_Grand_Prix',
                    raceName: 'Hungarian Grand Prix',
                    Circuit: {
                        circuitId: 'hungaroring',
                        url: 'http://en.wikipedia.org/wiki/Hungaroring',
                        circuitName: 'Hungaroring',
                        Location: {
                            lat: '47.5789',
                            long: '19.2486',
                            locality: 'Budapest',
                            country: 'Hungary'
                        }
                    },
                    date: '2006-08-06',
                    time: '14:00:00Z',
                    Results: [
                        {
                            number: '12',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'button',
                                permanentNumber: '22',
                                code: 'BUT',
                                url: 'http://en.wikipedia.org/wiki/Jenson_Button',
                                givenName: 'Jenson',
                                familyName: 'Button',
                                dateOfBirth: '1980-01-19',
                                nationality: 'British'
                            },
                            Constructor: {
                                constructorId: 'honda',
                                url: 'http://en.wikipedia.org/wiki/Honda_Racing_F1',
                                name: 'Honda',
                                nationality: 'Japanese'
                            },
                            grid: '14',
                            laps: '70',
                            status: 'Finished',
                            Time: {
                                millis: '6740941',
                                time: '1:52:20.941'
                            },
                            FastestLap: {
                                rank: '4',
                                lap: '57',
                                Time: {
                                    time: '1:25.143'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '185.236'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '14',
                    url: 'http://en.wikipedia.org/wiki/2006_Turkish_Grand_Prix',
                    raceName: 'Turkish Grand Prix',
                    Circuit: {
                        circuitId: 'istanbul',
                        url: 'http://en.wikipedia.org/wiki/Istanbul_Park',
                        circuitName: 'Istanbul Park',
                        Location: {
                            lat: '40.9517',
                            long: '29.405',
                            locality: 'Istanbul',
                            country: 'Turkey'
                        }
                    },
                    date: '2006-08-27',
                    time: '15:00:00Z',
                    Results: [
                        {
                            number: '6',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'massa',
                                permanentNumber: '19',
                                code: 'MAS',
                                url: 'http://en.wikipedia.org/wiki/Felipe_Massa',
                                givenName: 'Felipe',
                                familyName: 'Massa',
                                dateOfBirth: '1981-04-25',
                                nationality: 'Brazilian'
                            },
                            Constructor: {
                                constructorId: 'ferrari',
                                url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                name: 'Ferrari',
                                nationality: 'Italian'
                            },
                            grid: '1',
                            laps: '58',
                            status: 'Finished',
                            Time: {
                                millis: '5331082',
                                time: '1:28:51.082'
                            },
                            FastestLap: {
                                rank: '2',
                                lap: '38',
                                Time: {
                                    time: '1:28.123'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '218.067'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '15',
                    url: 'http://en.wikipedia.org/wiki/2006_Italian_Grand_Prix',
                    raceName: 'Italian Grand Prix',
                    Circuit: {
                        circuitId: 'monza',
                        url: 'http://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza',
                        circuitName: 'Autodromo Nazionale di Monza',
                        Location: {
                            lat: '45.6156',
                            long: '9.28111',
                            locality: 'Monza',
                            country: 'Italy'
                        }
                    },
                    date: '2006-09-10',
                    time: '14:00:00Z',
                    Results: [
                        {
                            number: '5',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructor: {
                                constructorId: 'ferrari',
                                url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                name: 'Ferrari',
                                nationality: 'Italian'
                            },
                            grid: '2',
                            laps: '53',
                            status: 'Finished',
                            Time: {
                                millis: '4491975',
                                time: '1:14:51.975'
                            },
                            FastestLap: {
                                rank: '2',
                                lap: '14',
                                Time: {
                                    time: '1:22.575'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '252.555'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '16',
                    url: 'http://en.wikipedia.org/wiki/2006_Chinese_Grand_Prix',
                    raceName: 'Chinese Grand Prix',
                    Circuit: {
                        circuitId: 'shanghai',
                        url: 'http://en.wikipedia.org/wiki/Shanghai_International_Circuit',
                        circuitName: 'Shanghai International Circuit',
                        Location: {
                            lat: '31.3389',
                            long: '121.22',
                            locality: 'Shanghai',
                            country: 'China'
                        }
                    },
                    date: '2006-10-01',
                    time: '14:00:00Z',
                    Results: [
                        {
                            number: '5',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'michael_schumacher',
                                code: 'MSC',
                                url: 'http://en.wikipedia.org/wiki/Michael_Schumacher',
                                givenName: 'Michael',
                                familyName: 'Schumacher',
                                dateOfBirth: '1969-01-03',
                                nationality: 'German'
                            },
                            Constructor: {
                                constructorId: 'ferrari',
                                url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                name: 'Ferrari',
                                nationality: 'Italian'
                            },
                            grid: '6',
                            laps: '56',
                            status: 'Finished',
                            Time: {
                                millis: '5852747',
                                time: '1:37:32.747'
                            },
                            FastestLap: {
                                rank: '2',
                                lap: '50',
                                Time: {
                                    time: '1:38.553'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '199.117'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '17',
                    url: 'http://en.wikipedia.org/wiki/2006_Japanese_Grand_Prix',
                    raceName: 'Japanese Grand Prix',
                    Circuit: {
                        circuitId: 'suzuka',
                        url: 'http://en.wikipedia.org/wiki/Suzuka_Circuit',
                        circuitName: 'Suzuka Circuit',
                        Location: {
                            lat: '34.8431',
                            long: '136.541',
                            locality: 'Suzuka',
                            country: 'Japan'
                        }
                    },
                    date: '2006-10-08',
                    time: '14:00:00Z',
                    Results: [
                        {
                            number: '1',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'alonso',
                                permanentNumber: '14',
                                code: 'ALO',
                                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                                givenName: 'Fernando',
                                familyName: 'Alonso',
                                dateOfBirth: '1981-07-29',
                                nationality: 'Spanish'
                            },
                            Constructor: {
                                constructorId: 'renault',
                                url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                                name: 'Renault',
                                nationality: 'French'
                            },
                            grid: '5',
                            laps: '53',
                            status: 'Finished',
                            Time: {
                                millis: '5032413',
                                time: '1:23:52.413'
                            },
                            FastestLap: {
                                rank: '1',
                                lap: '14',
                                Time: {
                                    time: '1:32.676'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '225.572'
                                }
                            }
                        }
                    ]
                },
                {
                    season: '2006',
                    round: '18',
                    url: 'http://en.wikipedia.org/wiki/2006_Brazilian_Grand_Prix',
                    raceName: 'Brazilian Grand Prix',
                    Circuit: {
                        circuitId: 'interlagos',
                        url: 'http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace',
                        circuitName: 'Autódromo José Carlos Pace',
                        Location: {
                            lat: '-23.7036',
                            long: '-46.6997',
                            locality: 'São Paulo',
                            country: 'Brazil'
                        }
                    },
                    date: '2006-10-22',
                    time: '14:00:00Z',
                    Results: [
                        {
                            number: '6',
                            position: '1',
                            positionText: '1',
                            points: '10',
                            Driver: {
                                driverId: 'massa',
                                permanentNumber: '19',
                                code: 'MAS',
                                url: 'http://en.wikipedia.org/wiki/Felipe_Massa',
                                givenName: 'Felipe',
                                familyName: 'Massa',
                                dateOfBirth: '1981-04-25',
                                nationality: 'Brazilian'
                            },
                            Constructor: {
                                constructorId: 'ferrari',
                                url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                                name: 'Ferrari',
                                nationality: 'Italian'
                            },
                            grid: '1',
                            laps: '71',
                            status: 'Finished',
                            Time: {
                                millis: '5513751',
                                time: '1:31:53.751'
                            },
                            FastestLap: {
                                rank: '2',
                                lap: '23',
                                Time: {
                                    time: '1:12.877'
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '212.857'
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
};

export const seasonsFrom2005To2015: Season[] = <Season[]> [{season: '2005', driver: {driverId: 'alonso', permanentNumber: '14', code: 'ALO', url: 'http://en.wikipedia.org/wiki/Fernando_Alonso', givenName: 'Fernando', familyName: 'Alonso', dateOfBirth: '1981-07-29', nationality: 'Spanish'}}, {season: '2006', driver: {driverId: 'alonso', permanentNumber: '14', code: 'ALO', url: 'http://en.wikipedia.org/wiki/Fernando_Alonso', givenName: 'Fernando', familyName: 'Alonso', dateOfBirth: '1981-07-29', nationality: 'Spanish'}}, {season: '2007', driver: {driverId: 'raikkonen', permanentNumber: '7', code: 'RAI', url: 'http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen', givenName: 'Kimi', familyName: 'Räikkönen', dateOfBirth: '1979-10-17', nationality: 'Finnish'}}, {season: '2008', driver: {driverId: 'hamilton', permanentNumber: '44', code: 'HAM', url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton', givenName: 'Lewis', familyName: 'Hamilton', dateOfBirth: '1985-01-07', nationality: 'British'}}, {season: '2009', driver: {driverId: 'button', permanentNumber: '22', code: 'BUT', url: 'http://en.wikipedia.org/wiki/Jenson_Button', givenName: 'Jenson', familyName: 'Button', dateOfBirth: '1980-01-19', nationality: 'British'}}, {season: '2010', driver: {driverId: 'vettel', permanentNumber: '5', code: 'VET', url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel', givenName: 'Sebastian', familyName: 'Vettel', dateOfBirth: '1987-07-03', nationality: 'German'}}, {season: '2011', driver: {driverId: 'vettel', permanentNumber: '5', code: 'VET', url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel', givenName: 'Sebastian', familyName: 'Vettel', dateOfBirth: '1987-07-03', nationality: 'German'}}, {season: '2012', driver: {driverId: 'vettel', permanentNumber: '5', code: 'VET', url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel', givenName: 'Sebastian', familyName: 'Vettel', dateOfBirth: '1987-07-03', nationality: 'German'}}, {season: '2013', driver: {driverId: 'vettel', permanentNumber: '5', code: 'VET', url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel', givenName: 'Sebastian', familyName: 'Vettel', dateOfBirth: '1987-07-03', nationality: 'German'}}, {season: '2014', driver: {driverId: 'hamilton', permanentNumber: '44', code: 'HAM', url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton', givenName: 'Lewis', familyName: 'Hamilton', dateOfBirth: '1985-01-07', nationality: 'British'}}, {season: '2015', driver: {driverId: 'hamilton', permanentNumber: '44', code: 'HAM', url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton', givenName: 'Lewis', familyName: 'Hamilton', dateOfBirth: '1985-01-07', nationality: 'British'}}]
    .map(s => new Season(s));

export const seasonDetailsFor2006: SeasonDetails[] = <SeasonDetails[]> [{season: '2006', race: 'Bahrain Grand Prix', driver: 'Fernando Alonso', constr: 'Renault', time: '1:29:46.205', points: 10, status: 'Finished', position: 1, seasonChampion: true}, {season: '2006', race: 'Malaysian Grand Prix', driver: 'Giancarlo Fisichella', constr: 'Renault', time: '1:30:40.529', points: 10, status: 'Finished', position: 1, seasonChampion: false}, {season: '2006', race: 'Australian Grand Prix', driver: 'Fernando Alonso', constr: 'Renault', time: '1:34:27.870', points: 10, status: 'Finished', position: 1, seasonChampion: true}, {season: '2006', race: 'San Marino Grand Prix', driver: 'Michael Schumacher', constr: 'Ferrari', time: '1:31:06.486', points: 10, status: 'Finished', position: 1, seasonChampion: false}, {season: '2006', race: 'European Grand Prix', driver: 'Michael Schumacher', constr: 'Ferrari', time: '1:35:58.765', points: 10, status: 'Finished', position: 1, seasonChampion: false}, {season: '2006', race: 'Spanish Grand Prix', driver: 'Fernando Alonso', constr: 'Renault', time: '1:26:21.759', points: 10, status: 'Finished', position: 1, seasonChampion: true}, {season: '2006', race: 'Monaco Grand Prix', driver: 'Fernando Alonso', constr: 'Renault', time: '1:43:43.116', points: 10, status: 'Finished', position: 1, seasonChampion: true}, {season: '2006', race: 'British Grand Prix', driver: 'Fernando Alonso', constr: 'Renault', time: '1:25:51.927', points: 10, status: 'Finished', position: 1, seasonChampion: true}, {season: '2006', race: 'Canadian Grand Prix', driver: 'Fernando Alonso', constr: 'Renault', time: '1:34:37.308', points: 10, status: 'Finished', position: 1, seasonChampion: true}, {season: '2006', race: 'United States Grand Prix', driver: 'Michael Schumacher', constr: 'Ferrari', time: '1:34:35.199', points: 10, status: 'Finished', position: 1, seasonChampion: false}, {season: '2006', race: 'French Grand Prix', driver: 'Michael Schumacher', constr: 'Ferrari', time: '1:32:07.803', points: 10, status: 'Finished', position: 1, seasonChampion: false}, {season: '2006', race: 'German Grand Prix', driver: 'Michael Schumacher', constr: 'Ferrari', time: '1:27:51.693', points: 10, status: 'Finished', position: 1, seasonChampion: false}, {season: '2006', race: 'Hungarian Grand Prix', driver: 'Jenson Button', constr: 'Honda', time: '1:52:20.941', points: 10, status: 'Finished', position: 1, seasonChampion: false}, {season: '2006', race: 'Turkish Grand Prix', driver: 'Felipe Massa', constr: 'Ferrari', time: '1:28:51.082', points: 10, status: 'Finished', position: 1, seasonChampion: false}, {season: '2006', race: 'Italian Grand Prix', driver: 'Michael Schumacher', constr: 'Ferrari', time: '1:14:51.975', points: 10, status: 'Finished', position: 1, seasonChampion: false}, {season: '2006', race: 'Chinese Grand Prix', driver: 'Michael Schumacher', constr: 'Ferrari', time: '1:37:32.747', points: 10, status: 'Finished', position: 1, seasonChampion: false}, {season: '2006', race: 'Japanese Grand Prix', driver: 'Fernando Alonso', constr: 'Renault', time: '1:23:52.413', points: 10, status: 'Finished', position: 1, seasonChampion: true}, {season: '2006', race: 'Brazilian Grand Prix', driver: 'Felipe Massa', constr: 'Ferrari', time: '1:31:53.751', points: 10, status: 'Finished', position: 1, seasonChampion: false}]
    .map(sd => new SeasonDetails(sd));
