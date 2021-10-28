import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../Utils/Theme';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

export default Header;
// PROCGERDAU02169839000172;19368927002584;12227422000105;TK;1234567890;0123456789-1;11000;21/01/2021;BR TST1J36PROCGERDAU
// PROCGERDAU26245406000128;18294567831230;07358761000169;NF;0000403029;5500019885-1;05050;10/12/2020;MG GYW5172PROCGERDAU
// PROCGERDAU02169839000172;19368927002584;12227422000105;NF;06625;5500021145-1;06500;21/01/2021;BR SAM1C34PROCGERDAU
// PROCGERDAU21256870000287;1095662000155;17227422000105;TK;0001084655;0000000001-1-1;025750;16/01/2021;BR OPE9048;MG OPE9048PROCGERDAU
