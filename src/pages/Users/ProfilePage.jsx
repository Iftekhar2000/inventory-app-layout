import { Fragment, lazy, Suspense } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';
const Profile = lazy(() => import('../../components/Users/Profile'));
const ProfilePage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <Profile />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};
export default ProfilePage;
