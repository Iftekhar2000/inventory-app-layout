import { Fragment, Suspense } from 'react';
import CustomerCreateUpdate from '../../components/Customer/CustomerCreateUpdate';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const CustomerCreateUpdatePage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <CustomerCreateUpdate />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default CustomerCreateUpdatePage;
