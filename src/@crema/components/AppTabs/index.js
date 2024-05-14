// import React, { useState } from 'react';
// import { AppBar, Grid, Button, Box, Typography } from '@mui/material';
// import { Tabs, TabsList, TabPanel, Tab } from '@mui/base';
// import AppContentView from '../../components/AppContentView';
// import { withStyles } from '@mui/styles';
// import Add from '@mui/icons-material/Add';
// import Close from '@mui/icons-material/Close';
// import Home from '@mui/icons-material/HomeOutlined';
// import cloneDeep from 'lodash/cloneDeep';
// import Page1 from '../../../modules/sample/Page1';

// const styles = (theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
//   appBar: {
//     color: 'inherit',
//     backgroundColor: '#2E3032',
//   },
//   mytab: {
//     color: '#ffffff',
//     backgroundColor: '#36383B',
//     marginLeft: '10px',
//     marginTop: '10px',
//     borderTopLeftRadius: '4px',
//     borderTopRightRadius: '4px',
//     border: 'none',
//   },
//   selected: {
//     color: '#25282B',
//     backgroundColor: '#ffffff',
//   },
//   page: {
//     color: '#25282B',
//     backgroundColor: '#ffffff',
//     border:'1px solid black',
//     width:'100%'
//   },
// });

// const AppTabs = ({ classes }) => {
//   const [value, setValue] = useState(0);
//   const [tabList, setTabList] = useState([{ key: 0, id: 0 }]);

//   const addTab = () => {
//     setTabList((prevTabList) => {
//       const newTabList = cloneDeep(prevTabList);
//       const id = newTabList[newTabList.length - 1].id + 1;
//       newTabList.push({ key: id, id: id });
//       return newTabList;
//     });
//   };

//   const deleteTab = (id) => {
//     if (tabList.length === 1) {
//       return;
//     }

//     let curValue = parseInt(value);
//     if (curValue === id) {
//       const tabIDIndex = tabList.findIndex((tab) => tab.id === id);
//       if (tabIDIndex === 0) {
//         curValue = tabList[tabIDIndex + 1].id;
//       } else {
//         curValue = tabList[tabIDIndex - 1].id;
//       }
//     }

//     setValue(curValue);
//     setTabList(tabList.filter((tab) => tab.id !== id));
//   };

//   const handleTabChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <Box className={classes.appBar}>
//         <Grid container alignItems='center' justify='center'>
//           <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
//             <Tabs
//               value={value}
//               onChange={handleTabChange}
//               indicatorColor='primary'
//               textColor='primary'
//               variant='scrollable'
//               scrollButtons='auto'
//             >
//               <TabsList>
//                 {tabList.map((tab) => (
//                   <Tab
//                     key={tab.key.toString()}
//                     value={tab.id}
//                     className={
//                       value === tab.id
//                         ? `${classes.mytab} ${classes.selected}`
//                         : classes.mytab
//                     }
//                     sx={{ display: 'flex', alignItems: 'center' }}
//                   >
//                     <Grid container>
//                       <Home sx={{ marginX: '10px' }} />
//                       <Typography textAlign='start' sx={{ minWidth: '100px' }}>
//                         Node {tab.id}
//                       </Typography>
//                       <Close
//                         id={tab.id}
//                         onClick={() => deleteTab(tab.id)}
//                         sx={{ marginX: '10px' }}
//                       />
//                     </Grid>
//                   </Tab>
//                 ))}
//               </TabsList>
//               <TabPanel className={classes.page} value={0}>
//                 Dashboard
//               </TabPanel>
//               <TabPanel className={classes.page} value={1}>
//                 First page
//               </TabPanel>
//               <TabPanel className={classes.page} value={2}>
//                 Second page
//               </TabPanel>
//               <TabPanel className={classes.page} value={3}>
//                 Third page
//               </TabPanel>
//             </Tabs>
//           </Grid>
//         </Grid>
//       </Box>
//       <Box>
//         <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
//           <Button variant='outlined' onClick={addTab}>
//             <Add />
//           </Button>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default withStyles(styles)(AppTabs);
