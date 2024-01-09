import { Fragment, Suspense } from 'react';
import CustomerList from '../../components/Customer/CustomerList';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';
const CustomerListPage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <CustomerList />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default CustomerListPage;
