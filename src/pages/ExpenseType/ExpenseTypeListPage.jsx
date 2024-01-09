import { Fragment, Suspense } from 'react';
import ExpenseTypeList from '../../components/ExpenseType/ExpenseTypeList';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const ExpenseTypeListPage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <ExpenseTypeList />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default ExpenseTypeListPage;
