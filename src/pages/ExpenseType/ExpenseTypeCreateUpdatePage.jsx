import { Fragment, Suspense } from 'react';
import ExpenseTypeCreateUpdate from '../../components/ExpenseType/ExpenseTypeCreateUpdate';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const ExpenseTypeCreateUpdatePage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <ExpenseTypeCreateUpdate />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default ExpenseTypeCreateUpdatePage;
