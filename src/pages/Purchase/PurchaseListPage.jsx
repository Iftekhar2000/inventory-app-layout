import { Fragment, Suspense } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';
import PurchaseList from '../../components/Purchase/PurchaseList';

const PurchaseListPage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <PurchaseList />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default PurchaseListPage;
