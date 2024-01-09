import { Fragment, Suspense } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';
import ReturnList from '../../components/Return/ReturnList';

const ReturnListPage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <ReturnList />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default ReturnListPage;
