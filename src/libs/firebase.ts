

import { cert,initializeApp,ServiceAccount } from "firebase-admin/app";
import firebseConf from "@src/firebase-config.json"
import { getAuth } from "firebase-admin/auth";
const app = initializeApp({
    credential: cert(firebseConf as ServiceAccount),
});

const auth = getAuth(app);

// auth.projectConfigManager().updateProjectConfig({
//     multiFactorConfig: {
//       state: "ENABLED",
//       providerConfigs: [
//         {
//           state: "ENABLED",
//           totpProviderConfig: {
//             adjacentIntervals: 5,
//           },
//         },
//       ],
//     },
//   });
  
  export { auth };