# TerraCharge
documentation:
  navigations: https://reactnavigation.org/docs/getting-started/ <br />
  bottom sheet: https://www.npmjs.com/package/react-native-simple-bottom-sheet <br />
  depcheck: https://github.com/depcheck/depcheck and use 'npx depcheck' in terminal to find unused packages <br />
  location: https://docs.expo.dev/versions/latest/sdk/location/ <br/>
  rating: https://github.com/Monte9/react-native-ratings <br/>
  top tabs: https://reactnavigation.org/docs/material-top-tab-navigator <br/>
  date time picker: https://github.com/react-native-datetimepicker/datetimepicker <br/>
  modal: https://reactnative.dev/docs/modal <br/>
  concurrently: https://www.npmjs.com/package/concurrently#usage for running app and backend at the same time <br/>

  how to start app:
    -start backend: node database/server/index.js (this connects app with the database)
    -start webserver: lt --port 3002 --subdomain terra-charge (this is so that you can get to the backend from any device
    <br/> on the network)
    -start app: npm start (first 2 steps only need to be done the first time)
    -start arduino: node arduino/arduinoServer.js ( backend and webserver need to be opened)