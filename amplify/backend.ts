import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

<<<<<<< HEAD
/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
=======
>>>>>>> 10772ed (Initial commit)
defineBackend({
  auth,
  data,
});
