import { Fragment, Suspense } from 'react';
import BrandCreateUpdate from '../../components/Brand/BrandCreateUpdate';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const BrandCreateUpdatePage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <BrandCreateUpdate />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default BrandCreateUpdatePage;
