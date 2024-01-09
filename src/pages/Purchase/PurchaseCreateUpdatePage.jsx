import { Fragment, Suspense } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';
import PurchaseCreateUpdate from '../../components/Purchase/PurchaseCreateUpdate';

const PurchaseCreateUpdatePage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <PurchaseCreateUpdate />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default PurchaseCreateUpdatePage;
