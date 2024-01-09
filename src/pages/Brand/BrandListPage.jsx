import { Fragment, Suspense } from 'react';
import BrandList from '../../components/Brand/BrandList';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';
const BrandListPage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <BrandList />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};
export default BrandListPage;
