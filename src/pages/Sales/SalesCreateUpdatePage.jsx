import { Fragment, Suspense } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';
import SalesCreateUpdate from '../../components/Sales/SalesCreateUpdate';

const SalesCreateUpdatePage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <SalesCreateUpdate />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default SalesCreateUpdatePage;
